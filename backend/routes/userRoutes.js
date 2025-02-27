import express from "express";

import {
  login,
  logout,
  protect,
  signup,
  updatePassword,
} from "../controllers/authControler.js";

export const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.patch("/updateMyPassword", protect, updatePassword);
