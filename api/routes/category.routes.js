import express from "express";
import {
  createCategory,
  getCategories,
} from "../controller/category.controller.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/get", getCategories);

export default router;
