var jwt = require('jsonwebtoken');

const secret = 'gausahbilang2rahasia';

  var systemToken = jwt.sign({
    foo: 'gilalundroinijangansampebocor'
  }, secret, {
    expiresIn: '1000 years'
  });

  console.log(systemToken);