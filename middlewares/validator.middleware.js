const { body, validationResult } = require("express-validator");
const {appError}= require('../utils/appError.utils')

const validateUser = (req, res, next) => {
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
  const createUserValidator=[
    body("name").notEmpty().withMessage('name not empty'),
    body("email").isEmail().withMessage('invalid format'),
    body("password").isLength({ min: 4 }).withMessage('the password must be greater than 4 characters').isAlphanumeric().withMessage('the password must contain letters and numbers'),
    validateUser
  ]
  
   module.exports={createUserValidator}