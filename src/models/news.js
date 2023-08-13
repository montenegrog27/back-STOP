const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define("News", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return News;
};
