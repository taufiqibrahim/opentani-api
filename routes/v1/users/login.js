import Sequelize from 'sequelize';
import models from '../../../models';
import { pwCompare } from '../../../utils/pw';
import { createToken } from '../../../utils/token';

const Login = (req, res, next) => {
  if (req.body.user_name && req.body.password) {
    models.User.findOne({
      where: { userName: req.body.user_name }
    })
    .then( (user) => {
      if (!user) {
        res.status(404).json({
          details: "User not found"
        })
      } else if (user) {
        let vrf = pwCompare( req.body.password, user.pwHash );

        if (!vrf) {
          res.status(401).json({
            details: "Wrong password"
          })
        } else {
          let token = createToken(user);
          res.status(200).json({
            details: "Authentication successful",
            token: token
          })
        }
      }
    })
  } else {
    res.status(400).json({
      details: "Username and Password must not be empty"
    })
  }
}

export default Login;