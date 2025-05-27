import express from "express";
import { addProduct,saveInBulk } from "../controller/Product.controller.js";
const productRouter = express.Router();
productRouter.post("/add-product", addProduct);
productRouter.post("/save-in-bulk",saveInBulk);
export default productRouter;
