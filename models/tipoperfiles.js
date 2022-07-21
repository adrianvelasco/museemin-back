'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoPerfiles extends Model {
    static associate(models) {
      // define association here
    }
  }
  tipoPerfiles.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'tipoPerfiles',
  });
  return tipoPerfiles;
};