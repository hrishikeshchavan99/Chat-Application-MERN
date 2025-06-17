import express from "express";
import { registerUser, authUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);         // POST /api/user
router.post("/login", authUser);        // POST /api/user/login

export default router;
