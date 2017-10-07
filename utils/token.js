require('dotenv').config();

import jwt from 'jsonwebtoken';

const secret = process.env.GLOBAL_SECRET;

const createToken = (user) => {
  var token = jwt.sign({
    user: user.id
  }, secret, {
    expiresIn: '24h'
  });

  return token;
}

const verifyToken = (accessToken) => {
  let verified = null;
  
  try {
    verified = jwt.verify(accessToken, secret);
  } catch(err) {
    verified = null;
  }

  return verified;
}

const verifyTokenMiddleware = (req, res, next) => {
  let accessToken = req.body.token || req.params.token || req.headers['opentani-access-token'] || req.headers.token;
  let isTokenValid = false;

  if (!accessToken) {
    res.status(400).json({
      status: "Unauthorized",
      details: "No token provided"
    })
  }
  else {
    try {
      isTokenValid = jwt.verify(accessToken, secret);
    } catch(err) {
      isTokenValid = false;
    }
    if (isTokenValid) {
      next();
    } else {
      res.status(401).json({
        status: "Unauthorized",
        details: "Invalid or expired token. Login required"
      })
    }
  }
}

export {
  createToken,
  verifyToken,
  verifyTokenMiddleware
}