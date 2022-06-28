const { User } = require("../models/user.models");
const { catchAsync } = require("../utils/catchAsync.utils");
const { appError } = require("../utils/appError.utils");

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    status: "success",
    users,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  const NewUser = await User.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    status: "success",
    NewUser,
  });
});
const upDateUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = await User.findOne({ where: { id } });
  if (!user) {
    return next(new appError("user not found", 404));
  }
  await user.update({ name, email });
  res.status(204).json({ status: "success" });
});
module.exports = { getAllUsers, createUser, upDateUserById };
