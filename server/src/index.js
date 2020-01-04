const config = require("config");
const app = require("./app");
const startup = require("./utils/startup");

app.listen(config.get("app.port"), startup(config.get("app"), config.get("db")));