const route = require("express").Router();
const apartment = require("../models/apartment");

module.exports = (() => {
    route.get("/", (req, res, next) => {
        apartment.find((err, apartments) => {
            if(!err) {
                res.status(200).send(apartments);
            } else {
                res.status(500).send(err);
            }
        });
    })
    return route;
})();