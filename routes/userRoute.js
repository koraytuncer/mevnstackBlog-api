import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();

router.post("/createUser",userController.createUser)
router.get("/loginUser",userController.loginUser)

export default router;
