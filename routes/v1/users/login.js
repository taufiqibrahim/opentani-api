import Sequelize from 'sequelize';
import models from '../../../models';
import { pwCompare } from '../../../utils/pw';
import { createToken } from '../../../utils/token';
import { generateOtp } from '../../../utils/otp';

const Login = (req, res, next) => {
  if (req.body.userName) {
    models.User.findOne({
      where: { userName: req.body.userName }
    })
    .then( (user) => {
      if (!user) {
        res.status(404).json({
          code: 404,
          message: "User not found"
        })
      } 
      else if (user) {
        let to = null;

        if (req.headers["opentani-otp-transport"] == 'email') {
          to = user.email;
        } 
        else if (req.headers["opentani-otp-transport"] == 'sms') {
          to = user.phone;
        }
        
        let token = generateOtp(
          to,
          req.headers["opentani-otp-transport"]
        );
        res.status(200).json({
          code: 200,
          status: "OK",
          message: "OTP sent",
          otpTransport: req.headers["opentani-otp-transport"],
        });
      }
    })
  } else {
    res.status(400).json({
      code: 400,
      message: "Username and Password must not be empty"
    })
  }
}

export default Login;