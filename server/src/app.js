const app = require("express")();
const morgan = require("morgan");
const config = require("config").get("app");
const cors = require("cors");
const bodyParser = require("body-parser");

const apartments = require("./routes/apartments");

app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json());
app.use(morgan(config.logs));
app.use("/apartments", apartments);

module.exports = app;