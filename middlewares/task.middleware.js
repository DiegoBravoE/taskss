const {Tasks} = require("../models/tasks.models");
const { appError } = require("../utils/appError.utils");
const { catchAsync } = require("../utils/catchAsync.utils");

const taskExistStatus = catchAsync(async (req, res, next) => {
  const { status } = req.params;

  const task = await Tasks.findOne({ where: { status} });
  if (!task) {
    return next(new appError("status active", 404));
  }
  req.task= task
  next()
});

const taskExists = catchAsync(async (req, res, next) => {
  const {id } = req.params;

  const task = await Tasks.findOne({ where: { id} });
  if (!task) {
    return next(new appError("status active", 404));
  }
  req.task= task
  next()
});



module.exports = { taskExistStatus,taskExists };
