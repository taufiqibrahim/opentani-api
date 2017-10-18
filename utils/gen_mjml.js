require('dotenv').config();

import { mjml2html } from 'mjml';
import { SignUpTemplate } from './mjml_templates/signup_template';

const mailFormatterSignUp = emailData => {
  const { error, html } = mjml2html(SignUpTemplate(emailData));

  return html;
};

export { mailFormatterSignUp };
