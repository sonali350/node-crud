import express from "express";

import Product from "../model/Product.model.js";

export const addProduct = async (req, res, next) => {
  try {
    const product = await Product.insertOne(req.body);
    return res.status(200).json({ message: "add product successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
