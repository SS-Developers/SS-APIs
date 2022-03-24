import { Router } from "express";
import * as systemController from "../controllers/newTimetable";
import dCrypt from "../middleware/isAuth";

const router = Router();

router.get("/getFormat", systemController.getFormat);
router.get("/getClassFromSchool", systemController.getClassFromSchool);

router.post("/newTimetable", dCrypt, systemController.newTimetable);
router.post("/newFormat", systemController.newFormat);

export default router;
