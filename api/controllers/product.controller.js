const PRODUCT_MODEL = require("../module/Product.module");

const createProduct = (req , res ) => {
    const {productName , productPrice , productImage , productThemes} = req.body

    PRODUCT_MODEL.create({
        productName,
        productPrice,
        productThemes,
        productImage,
    })
    .then((createRes) => {
        res.status(200).json(createRes);
    })
    .catch((e) => {
        res.status(500).json({
            error: true,
            errorMessage: e })});
}



const FindProduct = (req, res) => {
    const {productName, productPrice, productImage } = req.body

    PRODUCT_MODEL.Find({
        productName, 
        productPrice,
        productImage,
    })
    .then((FindRes) => {
        res.status(200).json(FindRes)
    })
    .catch((e) => {
        res.status(500).json({
            error: true,
            errorMessage: e })})
}

module.exports = {
    createProduct,
};