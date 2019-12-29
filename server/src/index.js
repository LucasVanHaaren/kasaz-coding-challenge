const app = require("express")();
const morgan = require("morgan");
const config = require("config");
const startup = require("./utils/startup");

const apartments = require("./routes/apartments");

app.use("/apartments", apartments);

app.listen(config.get("app.port"), startup(config.get("app"), config.get("db")));