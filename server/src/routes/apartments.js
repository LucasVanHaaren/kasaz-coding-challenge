const route = require("express").Router();
const apartment = require("../models/apartment");

module.exports = (() => {
    route.get("/", (req, res, next) => {
        apartment.find(queryParser(req.query),(err, apartments) => {
            if(!err) {
                res.status(200).send(apartments);
            } else {
                res.status(500).send(err);
            }
        });
    });
    return route;
})();

function queryParser(query) {
    let filter = {};
    if(query) {
        if(query.title) {
            filter.title = { $regex: query.title, $options: 'i'}
        }
        if(query.minPrice && query.maxPrice) {
            filter.price = { $gte: query.minPrice, $lte: query.maxPrice }
        }
        if(query.minSqm && query.maxSqm) {
            filter.sqm = { $gte: query.minSqm, $lte: query.maxSqm }
        }
        if(query.minBedroomsCount) {
            filter.bedroomsCount = { $gte: query.minBedroomsCount }
        }
        if(query.minBathroomsCount) {
            filter.bathroomsCount = { $gte: query.minBathroomsCount }
        }
    }
    return filter;
}