const { body, validationResult } = require("express-validator");
const {appError}= require('../utils/appError.utils')


const validateTask = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     const errorMsg= errors.array().map((err) => {
        return err.msg;
        
      });
      const message= errorMsg.join(', ')
  
      return next(new appError(message,400)) 
    }
    next();
  };

  const createTaskValidator=[
    body("title").notEmpty().withMessage('title not empty'),
    body("userId").isNumeric().withMessage(' user id invalid format'),
    body("limitDate").notEmpty().withMessage('limit date not empty'),
    validateTask
  ]
  module.exports={createTaskValidator}