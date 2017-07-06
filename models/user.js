'use strict';

import bcrypt from 'bcryptjs';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    citizenId: {
      type: DataTypes.STRING,
      unique: { msg: "Citizen ID already registered" }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: { msg: "Email already registered" },
      validate: {
        isEmail: { msg: "Must be a valid email address" }
      }
    },
    phone: {
      type: DataTypes.STRING,
      unique: { msg: "Phone number already registered" },
      validate: {
        min: 10
      }
    },
    fullName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    pwHash: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options, cb) => {
        var hash = bcrypt.hashSync(user.password, 8);
        user.pwHash = hash;
        var normalizedEmail = user.email.toLowerCase();
        user.email = normalizedEmail;
        cb(null, user);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};