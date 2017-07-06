require('dotenv').config();

const nodemailer = require('nodemailer');

  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  })

const sendOtpByEmail = (to, subject, message) => {

  const mailOptions = {
    from: process.env.MAILER_USERNAME,
    to: to,
    subject: subject,
    html: message
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
  })

}

export {
  sendOtpByEmail,
}