const app = require("express")();
const morgan = require("morgan");
const config = require("config");
const startup = require("./utils/startup");
const cors = require("cors");

const apartments = require("./routes/apartments");

app.use(cors({
    origin: "*"
}))
app.use("/apartments", apartments);

app.listen(config.get("app.port"), startup(config.get("app"), config.get("db")));