const express = require("express");
const { body, validationResult } = require("express-validator");

const { Tasks } = require("../models/tasks.models");

const {
  createTask,
  getAllTask,
  getAllTaskStatus,
  upDateTaskById,
  deleteTask,
} = require("../controllers/task.controllers");
//const {taskExists}= require("../middlewares/task.middleware")
const {createTaskValidator}=require("../middlewares/validateTask.middleware")
const {taskExistStatus,taskExists}=require("../middlewares/task.middleware")
const taskRouter = express.Router();

taskRouter.post("/",createTaskValidator, createTask);
taskRouter.get("/", getAllTask);
taskRouter.get("/:status",taskExistStatus, getAllTaskStatus);
taskRouter.patch("/:id",taskExists, upDateTaskById);
taskRouter.delete("/:id",taskExists, deleteTask);

module.exports = { taskRouter };
