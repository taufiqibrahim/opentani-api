import Sequelize from 'sequelize';
import models from '../../../models';
import { createToken } from '../../../utils/token';

const Authenticate = (req, res, next) => {
  models.User
    .findOne({
      where: { userName: req.body.userName }
    })
    .then(user => {
      if (!user) {
        res.status(404).json({
          code: 404,
          message: 'User not found'
        });
      } else if (user) {
        let token = createToken(user);
        res.status(200).json({
          code: 200,
          message: 'Authentication successful',
          token: token
        });
      }
    });
};

export default Authenticate;
