const express = require('express');
const router = express.Router();
const {GenURL} = require("../controllers/url")

router.post("/",GenURL);


module.exports =router;
