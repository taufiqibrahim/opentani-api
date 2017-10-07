require('dotenv').config();

import speakeasy from 'speakeasy';
import request from 'request';
import {sendOtpByEmail} from './mailer';
import {sendSmsNexmo} from './smsNexmo';

const BASE_URL = process.env.NEXMO_BASE_URL;

const generateOtp = (to, otpTransport) => {
  const otp = speakeasy.totp({
    secret: process.env.GLOBAL_SECRET,
    encoding: 'ascii',
    digits: process.env.OTP_NUM_DIGIT,
    step: process.env.OTP_NUM_STEP,
    window: process.env.OTP_NUM_WINDOW
  });

  const subject = 'Kode Aktivasi Opentani';
  const message = 'Kode Aktivasi Opentani Anda adalah: ' + otp + '. Kode ini berlaku selama 24 jam.';
  const emailData = {
    subject: subject,
    otp: otp,
  }

  if (otpTransport == 'email') {
    sendOtpByEmail(to, subject, emailData);
  } else if (otpTransport == 'sms') {
    sendSmsNexmo(to, message);
  }
  return otp;
}

const verifyOtp = (req, res, next) => {

  let token = req.headers['opentani-otp-token'];
  let userName = req.body.userName;
  let verified = false;

  if ( !token && !userName ) {
    res.status(400).json({
      code: 400,
      status: "Unauthorized",
      message: "No OTP & UserName provided"
    })
  }
  else if ( !userName ) {
    res.status(400).json({
      code: 400,
      status: "Unauthorized",
      message: "No UserName provided"
    })
  }
  else if ( !token ) {
    res.status(400).json({
      code: 400,
      status: "Unauthorized",
      message: "No OTP provided"
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
        code: 401,
        status: "Unauthorized",
        message: "Invalid or expired OTP"
      })
    }
    if (verified) {
      next();
    } else {
      res.status(401).json({
        code: 401,
        status: "Unauthorized",
        message: "Invalid or expired OTP"
      })
    }
  }
}

export {
  generateOtp,
  verifyOtp
}