import express from "express";
import { addProduct } from "../controller/Product.controller.js";
const productRouter = express.Router();
productRouter.post("/add-product", addProduct);
export default productRouter;
