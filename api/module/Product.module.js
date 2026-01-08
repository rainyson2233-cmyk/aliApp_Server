const { Schema, model } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({
    productName : String,
    productPrice: String,
    productThemes: [String],
    prodcutImage : [String],
    
});

const PRODUCT_MODEL = model("product", PRODUCT_SCHEMA);
module.exports = PRODUCT_MODEL;

