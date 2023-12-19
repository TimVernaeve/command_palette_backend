import express from "express";
import ResultController from "../controllers/ResultController";
const router = express.Router();

router.get("/getAll", ResultController.getResults);

export default router;