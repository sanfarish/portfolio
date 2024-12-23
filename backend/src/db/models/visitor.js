'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitor.init({
    remote: DataTypes.STRING,
    visit: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Visitor',
    underscored: true,
    tableName: 'Visitors'
  });
  return Visitor;
};