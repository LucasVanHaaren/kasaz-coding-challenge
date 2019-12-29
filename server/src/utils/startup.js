const dbConnection = require("./dbConnection");
module.exports = (appConfig, dbConfig) => {
    dbConnection(dbConfig);
    console.log(`Server running at port ${appConfig.port} in ${appConfig.mode} mode`);
};