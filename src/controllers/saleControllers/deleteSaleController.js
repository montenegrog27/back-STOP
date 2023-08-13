const { sequelize } = require("../../db");

exports.eliminarOferta = async (req, res) => {
  const ofertaId = req.params.id;

  try {
    const Sale = sequelize.models.Sale;
    await Sale.destroy({ where: { id: ofertaId } });

    res.json({ message: "Oferta eliminada correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
