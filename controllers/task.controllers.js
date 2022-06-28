const {Tasks}=require('../models/tasks.models')
const {User}=require("../models/user.models");
const { catchAsync } = require("../utils/catchAsync.utils");
const { appError } = require('../utils/appError.utils');

const createTask = catchAsync(async (req, res, next) => {
  const { title, userId, limitDate } = req.body;
  const newTask = await Tasks.create({
    title,
    userId,
    limitDate,
    startDate:new Date(),
    finishDate:new Date(),
  });
  res.status(201).json({
    status: "success",
    newTask,
  });
}); 

const getAllTask= catchAsync(async(req, res, next)=>{
    const tasks = await Tasks.findAll({include:User});
    res.status(200).json({
      status: "success",
      tasks,
    });
  }) 

const getAllTaskStatus= async(req, res, next)=>{
    const{task}=req;
    res.status(200).json({
        status: "success",
        task,
    })

}
const upDateTaskById =async()=>{

}
const deleteTask= async()=>{

}
module.exports={createTask,getAllTask,getAllTaskStatus,upDateTaskById,deleteTask}