const cheerio = require('cheerio');

module.exports = (html) => {

    const $ = cheerio.load(html);

    // Extracting Name
    const name = $("#user-profile-left h3").text();

    // Extracting Global Rank
    const global_rank = $("#user-profile-left p", html).eq(2).text().substring(13);

    // Extracting Fully Solved Questions
    const fully_solved_count = $('.profile-info-data dd').eq(0).text();

    return { name, global_rank, fully_solved_count }

}