import Sequelize from 'sequelize';
import models from '../../../models';
import { createToken } from '../../../utils/token';
import { generateOtp } from '../../../utils/otp';

const SignUp = (req, res, next) => {
  models.User.create({
    userName: req.body.user_name,
    password: req.body.password,
    email: req.body.email,
    phone: req.body.phone,
    fullName: req.body.full_name
  })
  .then((user) => {
    let to = null;

    if (req.query.otp_method == 'email') {
      to = user.email;
    } 
    else if (req.query.otp_method == 'sms') {
      to = user.phone;
    }
    
    let token = generateOtp(
      to,
      req.query.otp_method
    );
    res.status(200).json({
      status: "OK",
      details: "User successfully created",
    })
  })
  .catch(Sequelize.ValidationError, (err) => {
    res.status(400).json({
      status: "Bad Request",
      details: "",
      error: err.errors
    })
  })
}

export default SignUp;