'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
  };
  return Board;
};