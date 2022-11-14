import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js"
const router = express.Router();


router.get("/",pageController.getIndexPage)
router.get("/login",authMiddleware.authenticateToken,pageController.getLoginPage)

export default router;
