'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    bio: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};