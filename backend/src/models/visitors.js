'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visitors extends Model {
    static associate(models) {
    }
  }
  visitors.init({
    farishasan_visit: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'visitors',
    underscored: true,
    freezeTableName: true,
    timestamps: true
  });
  return visitors;
};