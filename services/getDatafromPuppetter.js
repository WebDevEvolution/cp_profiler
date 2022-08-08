// Problem with Hackerearth and Axios

const puppeteer = require("puppeteer");
const fs = require("fs");
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

module.exports = async (url) => {
 
  
    console.log(url)
    const browser = await puppeteer.launch({
      slowMo: 250,
      headless:false // slow down by 250ms
    });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "networkidle0"
    });
  
    /* Run javascript inside the page */
    const data = await page.evaluate(() => {
      return document.querySelector("body").innerHTML;
    });

    await page.waitForFunction('document.querySelector("html")');
    const dataa = (data);
    await browser.close();
    return (dataa)
  };

