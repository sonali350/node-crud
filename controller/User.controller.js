import { request, response } from "express";
import User from "../model/User.model.js";
export const signUp = async (request, response, next) => {
  const { name, email, password, contact } = request.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return response.status(400).json({ message: "user already exists" });
    }

    const newUser = new User({ name, email, password, contact });
    await newUser.save();

    response.status(200).json({ message: "user signup successfully" });
  } catch (error) {
    response.status(500).json({ message: "server error" });
  }
};

export const signIn = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const existEmail = await User.findOne({ email });
    if (!existEmail) {
      return response.status(401).json({ message: "user not found" });
    }
    if (password == existEmail.password) {
      return response.status(200).json({ message: "user login successful" });
    }
  } catch (error) {
    response.status.response(500).json({ message: "server error" });
  }
};
