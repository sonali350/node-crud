import express from "express";
import connectDB from "./dbConfig/db.js";
import userRouter from "./routes/User.route.js";
import productRouter from "./routes/Product.route.js";
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/product", productRouter);
app.listen(3000, () => {
  console.log("server started");
});
