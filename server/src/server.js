const chalk = require("chalk");
const app = require("./app");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "development";

// Use to run a server listener
function start(port) {
  // Init database
  db.sequelize
    .sync()
    .then(() => {
      console.log(chalk.green("⚡ Connect to DB!"));
      app.listen(port, () => {
        console.log(chalk.yellow(`✨ Server is listening on port ${port}`));
      });
    })
    .catch((error) => {
      console.log(chalk.red(error));
    });
}

/**
 * Entry point
 */
if (env === "production") {
  start(PORT);
} else {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.log(chalk.red("Usage: node src/main.js <port>"));
    process.exit(0);
  }

  const port = args[0];
  start(parseInt(port, 10));
}
