import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const getAllSchools = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userLat = parseFloat(req.query.latitude as string);
  const userLng = parseFloat(req.query.longitude as string);

  if (isNaN(userLat) || isNaN(userLng)) {
    res.status(400).json({
      error:
        "latitude and longitude query parameters are required and must be numbers.",
    });
    return;
  }

  try {
    const schools = await prisma.school.findMany();
    function getDistance(
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number
    ) {
      const toRad = (v: number) => (v * Math.PI) / 180;
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    }
    const sorted = schools
      .map((school) => ({
        ...school,
        distance: getDistance(
          userLat,
          userLng,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);
    res.json(sorted);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch schools." });
  }
};

export const addSchool = async (req: Request, res: Response) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof address !== "string" ||
    !address.trim() ||
    typeof latitude !== "number" ||
    isNaN(latitude) ||
    typeof longitude !== "number" ||
    isNaN(longitude)
  ) {
    res.status(400).json({
      error:
        "Invalid input. All fields are required and must be correct types.",
    });
    return;
  }

  try {
    const school = await prisma.school.create({
      data: { name, address, latitude, longitude },
    });
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: "Failed to add school." });
  }
};
