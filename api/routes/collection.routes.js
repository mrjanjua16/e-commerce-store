import express from "express";
import {
  getCollection,
  createCollection,
} from "../controller/collection.controller.js";

const router = express.Router();

router.get("/get", getCollection);
router.post("/create", createCollection);

export default router;
