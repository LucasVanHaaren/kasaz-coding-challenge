const mongoose = require("mongoose");

const apartmentSchema = mongoose.Schema({
    title: String,
    price: Number,
    sqm: Number,
    bedroomsCount: Number,
    bathroomsCount: Number,
    thumbnail: String
}, {
    versionKey: false
});

module.exports = mongoose.model("Apartment", apartmentSchema);