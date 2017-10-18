require('dotenv').config();

var https = require('https');

const sendSmsNexmo = (to, message) => {
  var data = JSON.stringify({
    //api_key: process.env.NEXMO_API_KEY,
    api_key: '12432',
    api_secret: process.env.NEXMO_API_SECRET,
    to: to,
    from: 'NEXMO',
    text: message
  });

  var options = {
    host: 'rest.nexmo.com',
    path: '/sms/json',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var req = https.request(options);

  req.write(data);
  req.end();

  var responseData = '';
  req.on('response', function(res) {
    res.on('data', function(chunk) {
      responseData += chunk;
    });

    res.on('end', function() {
      console.log(JSON.parse(responseData));
    });
  });
};

export { sendSmsNexmo };
