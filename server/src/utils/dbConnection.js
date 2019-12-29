const mongoose = require("mongoose");

module.exports = (dbConfig) => {
    mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) throw err;
    });
};