import { Router } from "express";
import { addSchool, getAllSchools } from "../controllers/schoolControllers";

const router = Router();

router.get("/", getAllSchools);
router.post("/", addSchool);

export default router;
