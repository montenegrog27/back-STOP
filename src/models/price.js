const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Precio = sequelize.define("Precio", {
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
  });

  return Precio;
};
