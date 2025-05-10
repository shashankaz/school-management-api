import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const schools = [
  {
    name: "Green Valley School",
    address: "123 Green St, Springfield",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    name: "Blue Ridge Academy",
    address: "456 Blue Ave, Springfield",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    name: "Sunrise Public School",
    address: "789 Sunrise Rd, Springfield",
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    name: "Riverdale High",
    address: "101 River Rd, Springfield",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    name: "Hilltop International",
    address: "202 Hilltop Dr, Springfield",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    name: "Maple Leaf School",
    address: "303 Maple St, Springfield",
    latitude: 17.385,
    longitude: 78.4867,
  },
  {
    name: "Oakwood Academy",
    address: "404 Oakwood Ln, Springfield",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  {
    name: "Cedar Grove School",
    address: "505 Cedar Ave, Springfield",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    name: "Pinecrest School",
    address: "606 Pinecrest Blvd, Springfield",
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    name: "Lakeside Public School",
    address: "707 Lakeside Dr, Springfield",
    latitude: 21.1702,
    longitude: 72.8311,
  },
  {
    name: "Silver Oak School",
    address: "808 Silver Oak Rd, Springfield",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  {
    name: "Heritage International",
    address: "909 Heritage St, Springfield",
    latitude: 22.7196,
    longitude: 75.8577,
  },
  {
    name: "Starlight Academy",
    address: "111 Starlight Ave, Springfield",
    latitude: 25.3176,
    longitude: 82.9739,
  },
  {
    name: "Evergreen Public School",
    address: "222 Evergreen Blvd, Springfield",
    latitude: 15.2993,
    longitude: 74.124,
  },
  {
    name: "Harmony School",
    address: "333 Harmony Rd, Springfield",
    latitude: 11.0168,
    longitude: 76.9558,
  },
  {
    name: "Bright Future School",
    address: "444 Bright Future Ln, Springfield",
    latitude: 30.7333,
    longitude: 76.7794,
  },
  {
    name: "Royal Crest Academy",
    address: "555 Royal Crest Dr, Springfield",
    latitude: 27.1767,
    longitude: 78.0081,
  },
  {
    name: "Sunbeam School",
    address: "666 Sunbeam St, Springfield",
    latitude: 24.5854,
    longitude: 85.0122,
  },
  {
    name: "Liberty High School",
    address: "777 Liberty Ave, Springfield",
    latitude: 23.3441,
    longitude: 85.3096,
  },
  {
    name: "Unity International",
    address: "888 Unity Rd, Springfield",
    latitude: 34.0837,
    longitude: 74.7973,
  },
  {
    name: "Aspire Academy",
    address: "999 Aspire Blvd, Springfield",
    latitude: 32.7266,
    longitude: 74.857,
  },
];

export const main = async () => {
  await prisma.school.deleteMany();
  for (const school of schools) {
    await prisma.school.create({ data: school });
  }
  console.log("Data seeded successfully");
};
