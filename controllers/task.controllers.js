const {Tasks}=require('../models/tasks.models')
const {User}=require("../models/user.models");
const { catchAsync } = require("../utils/catchAsync.utils");
const { appError } = require('../utils/appError.utils');

const createTask = catchAsync(async (req, res, next) => {
  const { title, userId, limitDate,startDate } = req.body;
  const newTask = await Tasks.create({
    title,
    userId,
    limitDate,
    startDate,
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
const upDateTaskById = catchAsync(async (req, res, next) => {
  const { task } = req;
  const {limitDate,startDate,finishDate } = req.body;
  await task.update({ limitDate,startDate,finishDate });
if (finishDate>limitDate) {
  await task.update({ status: 'late' });
}else{
  await task.update({ status: 'completed' });
  res.status(204).json({ status: "success" });
}
}); 
const deleteTask= catchAsync(async (req, res, next) => {
	const { task } = req;

	// await user.destroy();
	await task.update({ status: 'cancelled' });

	res.status(204).json({ status: 'success' });
});
module.exports={createTask,getAllTask,getAllTaskStatus,upDateTaskById,deleteTask}