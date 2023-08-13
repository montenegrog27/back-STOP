const { sequelize } = require("../../db");

exports.actualizarPrecios = async (req, res) => {
  const { brahma, coca, azucar, spriteFanta } = req.body;

  try {
    const Precio = sequelize.models.Precio;

    // Actualizar precios existentes
    await Promise.all([
      Precio.update({ precio: brahma }, { where: { producto: "brahma" } }),
      Precio.update({ precio: coca }, { where: { producto: "coca" } }),
      Precio.update({ precio: azucar }, { where: { producto: "azucar" } }),
      Precio.update(
        { precio: spriteFanta },
        { where: { producto: "spriteFanta" } }
      ),
    ]);

    // Crear nuevos precios si no existen
    const productos = ["brahma", "coca", "azucar", "spriteFanta"];
    const preciosExistentes = await Precio.findAll({
      where: { producto: productos },
    });
    const productosExistentes = preciosExistentes.map(
      (precio) => precio.producto
    );

    const nuevosProductos = productos.filter(
      (producto) => !productosExistentes.includes(producto)
    );
    const nuevosPrecios = nuevosProductos.map((producto) => ({
      producto,
      precio: req.body[producto],
    }));

    await Precio.bulkCreate(nuevosPrecios);

    res.json({ message: "Precios actualizados correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
