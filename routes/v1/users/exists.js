import Sequelize from 'sequelize';
import models from '../../../models';

const Exists = (req, res, next) => {
  if (req.headers.method == 'email') {
    models.User.findOne({
      where: {
        email: req.headers.email
      }
    })
    .then( (user) => {
      if (user) {
        res.status(200).json({
          status: 'OK',
          details: 'Email address already in use',
          method: 'email',
          exists: true,
        })
      } else {
        res.status(200).json({
          status: 'OK',
          details: null,
          method: 'email',
          exists: false
        })
      }
    })
  } else if (req.headers.method == 'phone') {
    models.User.findOne({
      where: {
        phone: req.headers.phone
      }
    })
    .then( (user) => {
      if (user) {
        res.status(200).json({
          status: 'OK',
          details: 'Phone number already in use',
          method: 'phone',
          exists: true
        })
      } else {
        res.status(200).json({
          status: 'OK',
          details: null,
          method: 'phone',
          exists: false
        })
      }
    })
  } else {
    res.status(400).json({
      status: "Bad Request",
      details: "Unknown method. Must be either 'email' or 'phone'",
      method: null,
      exists: null,
    })
  }
}

export default Exists;