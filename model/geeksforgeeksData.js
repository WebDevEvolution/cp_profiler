const cheerio = require('cheerio');
const fs = require('fs');

module.exports = (html) => {

    const $ = cheerio.load(html);

    // Extracting Name
    const name = $("#detail1 .mdl-grid:nth-child(1) div:nth-child(2)", html).text();

    // Extracting Rating
    const rating = $("#detail1 .mdl-grid:nth-child(4) .mdl-cell > span", html).text().substring(24);

    // Extracting Profile Image URL
    const profile_image = $('.avatarDiv img').attr('src');

    // Extracting Fully Solved Questions
    const fully_solved_count = $("#detail1 .mdl-grid:nth-child(4) .mdl-cell:nth-child(2)", html).text().substring(17);

    return { name, rating, profile_image, fully_solved_count }

}