"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class literatur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      literatur.belongsTo(models.user, {
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  literatur.init(
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      publication_date: DataTypes.STRING,
      pages: DataTypes.INTEGER,
      ISBN: DataTypes.STRING,
      author: DataTypes.STRING,
      attache: DataTypes.STRING,
      about: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "literatur",
    }
  );
  return literatur;
};
