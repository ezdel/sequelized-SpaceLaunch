'use strict';
module.exports = function(sequelize, DataTypes) {
  var Spaceship = sequelize.define('Spaceship', {
    passengers: DataTypes.STRING,
    launched: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Spaceship;
};
