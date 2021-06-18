var express = require('express');
var router = express.Router();
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();
const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
router.get('/', function(req, res, next) {
  axios.get(url).then(response =>res.send(response.data)).catch((err)=> res.send(err))
});

module.exports = router;
