// Problem with Hackerearth and Axios

const cheerio = require("cheerio");
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

module.exports = (html) => {
  

const $ = cheerio.load(String(html));
 
  // Extracting Name
  const points = $(".points .value").text();
  const rating = $(".contest-ratings .value").text();
  const problem_solved = $(
    ".problems-solved .value"
  ).text();
  const submissions = $(".submissions .value").text();
  const name = $(".left .name").text();

  return { name, points, rating, problem_solved, submissions };
};
