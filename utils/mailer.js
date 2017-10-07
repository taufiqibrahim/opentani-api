require('dotenv').config();

const nodemailer = require('nodemailer');
import { mailFormatterSignUp } from './gen_mjml';

  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  })

const sendOtpByEmail = (to, subject, emailData) => {

  const emailHtml = mailFormatterSignUp(emailData);
  // console.log(emailHtml);

  const mailOptions = {
    from: process.env.MAILER_USERNAME,
    to: to,
    subject: emailData.subject,
    html: emailHtml,
  }

  //console.log(message);
  //console.log(`Message sent:`);

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