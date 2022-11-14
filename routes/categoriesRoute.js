import express from "express";
import * as categoriesController from "../controllers/categoriesController.js";
const router = express.Router();

router.get("/getAllCategories", categoriesController.getAllCategories);
router.post("/newCategories", categoriesController.createCategories);
router.get("/getCategory/:id", categoriesController.getACategories);
router.put("/updateCategory/:id", categoriesController.updateCategories);
router.delete("/deleteCategory/:id", categoriesController.deleteCategories);

export default router;
