const express = require('express');

// Routers
const { userRouter } = require('./routes/user.routes');
const{taskRouter}= require('./routes/task.routes')
//global error controllers
const {globalErrorHandler}= require('./controllers/error.controller')
const {appError}= require('./utils/appError.utils')
// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use('/api/v1/user', userRouter);
app.use('/api/v1/task', taskRouter);
app.all('*',(req,res,next)=>{
    next(new appError(`${req.method}${req.originalUrl} not found in this server`,404))
})

app.use(globalErrorHandler)

module.exports={app}