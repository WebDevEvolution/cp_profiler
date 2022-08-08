const cheerio = require("cheerio");
const getDatafromPuppetter = require("./getDatafromPuppetter");
async function getdata(url) {
  const data = await getDatafromPuppetter(url);
  const $ = cheerio.load(data);
  console.log($(".points .value").text());
  console.log($(".shadow-level3 .text-label-2 .ttext-label-1 .mr-4 .text-label-1").text());
}
getdata("https://www.hackerearth.com/@tanishqbhargava2509");
getdata("https://leetcode.com/neal_wu/");

