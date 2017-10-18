import Sequelize from 'sequelize';
import models from '../../../models';
import { createToken } from '../../../utils/token';
import { generateOtp } from '../../../utils/otp';

const SignUp = (req, res, next) => {
  models.User
    .create({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      fullName: req.body.fullName
    })
    .then(user => {
      let to = null;

      if (req.headers['opentani-otp-transport'] == 'email') {
        to = user.email;
      } else if (req.headers['opentani-otp-transport'] == 'sms') {
        to = user.phone;
      }

      let token = generateOtp(to, req.headers['opentani-otp-transport']);
      res.status(200).json({
        code: 200,
        status: 'OK',
        message: 'User successfully created'
      });
    })
    .catch(Sequelize.ValidationError, err => {
      res.status(400).json({
        code: 400,
        status: 'Bad Request',
        message: '',
        error: err.errors
      });
    });
};

export default SignUp;
