"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book_mark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book_mark.belongsTo(models.literatur, {
        as: "dataLiteratur",
        foreignKey: {
          name: "titleId",
        },
      });

      book_mark.belongsTo(models.user, {
        as: "dataUser",
        foreignKey: {
          name: "Iduser",
        },
      });
    }
  }
  book_mark.init(
    {
      titleId: DataTypes.INTEGER,
      Iduser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "book_mark",
    }
  );
  return book_mark;
};
