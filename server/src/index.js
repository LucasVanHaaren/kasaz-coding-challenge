const app = require("./app");

app.listen(config.get("app.port"), startup(config.get("app"), config.get("db")));