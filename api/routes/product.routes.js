import express from "express";
import {
  createProduct,
  getProducts,
  getSelectedProducts,
  newArrival,
} from "../controller/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/get", getProducts);
router.get("/get/selected/:userId", getSelectedProducts);
router.get("/get/new-arrival", newArrival);

export default router;
