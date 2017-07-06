import Sequelize from 'sequelize';
import models from '../../../models';
import { verifyToken } from '../../../utils/token';

const Logout = (req, res, next) => {
  let accessToken = req.body.token || req.params.token || req.headers['x-access-token'];
  res.status(200).json({
    status: "OK",
    details: "Logout successful"
  });

  /*if (!accessToken) {
    res.status(400).json({
      details: "No token provided"
    })
  }
  else {
    let vrf = verifyToken(accessToken);

    if (!vrf) {
      res.status(401).json({
        details: "Invalid or expired token. Login required"
      })
    }
    else {
      res.status(200).json({
        vrf
      })
    }
  }*/
}

export default Logout;