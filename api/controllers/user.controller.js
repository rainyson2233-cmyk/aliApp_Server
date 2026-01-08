const USER_MODEL = require("../module/user.module");

const createUser = (req , res ) => {
    const {firstName , lastName , image , userName} = req.body

    USER_MODEL.create({
        firstName ,
        lastName ,
        image ,
        userName ,
    })
    .then((createRes) => {
        res.status(200).json(createRes);
    })
    .catch((e) => {
        res.status(500).json({
            error: true,
            errorMessage: e })});
}

module.exports = {
    createUser,
};

const FindLogin = (req, res) => {
    const {Email, Password} = req.body

    USER_LOGIN.Find({
        Email, 
        Password,
    })
    .then((FindRes) => {
        res.status(200).json(FindRes)
    })
    .catch((e) => {
        res.status(500).json({
            error: true,
            errorMessage: e })})
}