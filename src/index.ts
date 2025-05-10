import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import expressRateLimit from "express-rate-limit";
import schoolRoutes from "./routes/schoolRoutes";
import { main } from "./seed/schools";
import { PrismaClient } from "../generated/prisma";

const app = express();

const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const limiter = expressRateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("API is Live!");
});

app.use("/api/schools", schoolRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
  });
});

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
