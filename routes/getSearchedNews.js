var express = require('express');
var router = express.Router();
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();
let url =  `https://newsapi.org/v2/everything?q=$query&apiKey=${process.env.API_KEY}`;
router.get('/', function(req, res, next) {
  url = url.replace("$query",req.query.searchTerm)
  axios.get(url).then(response =>res.send(response.data)).catch((err)=> res.send(err))
});

module.exports = router;
