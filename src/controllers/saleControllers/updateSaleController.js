const { sequelize } = require("../../db");

exports.modificarOferta = async (req, res) => {
  const { id } = req.params;
  const { producto, precio, imagen_url } = req.body;

  try {
    const Sale = sequelize.models.Sale;

    const ofertaExistente = await Sale.findByPk(id);
    if (!ofertaExistente) {
      return res.status(404).json({ error: "Oferta no encontrada" });
    }

    await Sale.update({ producto, precio, imagen_url }, { where: { id } });

    console.log("Oferta modificada correctamente");
    res.json({ message: "Oferta modificada correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
