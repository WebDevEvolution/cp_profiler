const cheerio = require("cheerio");
const axios = require("axios");
const getDatafromPuppetter = require("../getDatafromPuppetter");
const getPlatformBasedData = require("./getPlatformBasedData");

// Input: Profile Name, Platform Name
// Output: object, containing the user profile data
module.exports = async (profile, platform) => {
  var baseURL = "";
  var extras = "";

  switch (platform.toLowerCase()) {
    case "codechef":
      baseURL = "https://www.codechef.com/users/";
      break;

    case "codeforces":
      baseURL = "https://codeforces.com/profile/";
      break;

    case "hackerearth":
      baseURL = "https://www.hackerearth.com/@";
      break;

    case "leetcode":
      baseURL = "https://leetcode.com/";
      break;

    case "spoj":
      baseURL = "https://www.spoj.com/users/";
      break;

    case "geeksforgeeks":
      baseURL = "https://auth.geeksforgeeks.org/user/";
      extras = "/practice";
      break;
  }

  try {
    let rawData;
    if (
      baseURL.includes("https://www.hackerearth.com/") ||
      baseURL.includes("https://leetcode.com/")
    ) {
      console.log("https://www.hackerearth.com/@tanishqbhargava2509", "start");
      rawData = await getDatafromPuppetter(
        "https://www.hackerearth.com/@tanishqbhargava2509"
      );
      //   getdata("https://leetcode.com/neal_wu/");
      console.log("https://www.hackerearth.com/@tanishqbhargava2509", "end");
    } else {
      rawData = await axios.get(`${baseURL}${profile}${extras}`);
    }

    const data = getPlatformBasedData(platform, rawData.data);
    return { ...data, url: `${baseURL}${profile}${extras}` };
  } catch (err) {
    console.log(err.message, "ERROR");
    return { status: "Some error occured" };
  }
};
