import Sequelize from 'sequelize';
import models from '../../../models';
import { verifyToken } from '../../../utils/token';

const Logout = (req, res, next) => {
  res.status(200).json({
    code: 200,
    status: "OK",
    message: "Logout successful"
  });
}

export default Logout;