const server = require("./src/app.js");
const { sequelize } = require("./src/db.js");

const PORT = process.env.PORT || 3001;

sequelize.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
  });
});
