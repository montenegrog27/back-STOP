const { sequelize } = require("../../db");

exports.eliminarAviso = async (req, res) => {
  const avisoId = req.params.id;

  try {
    const News = sequelize.models.News;
    await News.destroy({ where: { id: avisoId } });
    res.json({ message: "Aviso eliminado correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
