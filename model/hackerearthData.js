// Problem with Hackerearth and Axios

const cheerio = require('cheerio');
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

module.exports = (html) => {

    const $ = cheerio.load(html);

    // Extracting Name
    const name = $(".left .name", html).text();

    return { name }

}