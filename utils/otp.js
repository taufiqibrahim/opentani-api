require('dotenv').config();

import speakeasy from 'speakeasy';
import request from 'request';
import {sendOtpByEmail} from './mailer';
import {sendSmsNexmo} from './smsNexmo';

const BASE_URL = process.env.NEXMO_BASE_URL;

const generateOtp = (to, otpMethod) => {
  const otp = speakeasy.totp({
    secret: process.env.GLOBAL_SECRET,
    encoding: 'ascii',
    digits: process.env.OTP_NUM_DIGIT,
    step: process.env.OTP_NUM_STEP,
    window: process.env.OTP_NUM_WINDOW
  });

  const subject = 'OTP Aktivasi Opentani';
  const message = 'OTP Aktivasi Opentani Anda adalah: ' + otp;

  if (otpMethod == 'email') {
    console.log('sending email disabled');
    //sendOtpByEmail(to, subject, message);
  } else if (otpMethod == 'sms') {
    console.log('sending SMS');
    sendSmsNexmo(to, message);
  }
  return otp;
}

const verifyOtp = (req, res, next) => {

  let token = req.body.token;
  let verified = false;

  if (!token) {
    res.status(400).json({
      status: "Unauthorized",
      details: "No OTP provided"
    })
  }
  else {
    try {
      verified = speakeasy.totp.verify({
        secret: process.env.GLOBAL_SECRET,
        encoding: 'ascii',
        digits: process.env.OTP_NUM_DIGIT,
        token: token,
        step: process.env.OTP_NUM_STEP,
        window: process.env.OTP_NUM_WINDOW
      })
    } catch(err) {
      res.status(401).json({
        status: "Unauthorized",
        details: "Invalid or expired OTP"
      })
    }
    if (verified) {
      res.status(200).json({
        status: "Authorized",
        details: "OTP is valid"
      })
    } else {
      res.status(401).json({
        status: "Unauthorized",
        details: "Invalid or expired OTP"
      })
    }
  }
}

export {
  generateOtp,
  verifyOtp
}