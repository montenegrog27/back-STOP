const { sequelize } = require("../../db");

exports.crearOfertas = async (req, res) => {
  console.log(req.body);
  const ofertas = req.body;

  try {
    const Sale = sequelize.models.Sale;
    const createdOfertas = await Sale.bulkCreate(ofertas);

    console.log("Ofertas creadas correctamente", createdOfertas);
    res.json({ message: "Ofertas creadas correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
