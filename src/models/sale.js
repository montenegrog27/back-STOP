const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Sale = sequelize.define("Sale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imagen_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Sale;
};
