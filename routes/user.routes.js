const express = require("express");
const { body, validationResult } = require("express-validator");
const { User } = require("../models/user.models");

const {
  getAllUsers,
  createUser,
  upDateUserById,
} = require("../controllers/users.controllers");


const {createUserValidator}=require("../middlewares/validator.middleware")

const userRouter = express.Router();
//routes users
userRouter.post("/",createUserValidator,createUser);
userRouter.get("/", getAllUsers);
userRouter.patch("/:id", upDateUserById);


module.exports = { userRouter };
