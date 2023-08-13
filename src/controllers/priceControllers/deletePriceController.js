const { sequelize } = require("../../db");

exports.eliminarPrecio = async (req, res) => {
  const producto = req.params.producto;

  try {
    const Precio = sequelize.models.Precio;
    await Precio.destroy({ where: { producto } });

    res.json({ message: "Precio eliminado correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
