import express from "express";
import {
  register,
  login,
  setAdmin,
  unSetAdmin,
} from "../controller/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/set-admin/:id", setAdmin);
router.post("/remove-admin/:id", unSetAdmin);

export default router;
