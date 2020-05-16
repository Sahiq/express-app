const express = require('express');
const Router = express.Router();


Router.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "welcome to index route"
    })
})


module.exports = Router;