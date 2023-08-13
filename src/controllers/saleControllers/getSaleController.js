const { sequelize } = require("../../db");

exports.getOfertas = async (req, res) => {
  try {
    const Sale = sequelize.models.Sale;
    const ofertas = await Sale.findAll();
    res.json(ofertas);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
