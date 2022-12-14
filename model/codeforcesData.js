const cheerio = require('cheerio');

module.exports = (html) => {

    const $ = cheerio.load(html);
    
    // Extracting Name
    const name = $(".main-info h1 a", html).text();
    
    // Extracting Rating
    const rating = $('.info li:nth-child(1) span:nth-child(2)', html).eq(0).text();
    
    // Extracting Highest Rating
    const highest_rating = $('.info li:nth-child(1) span:nth-child(3) span:nth-child(2)', html).text();
    
    // Extracting Profile Image URL
    const profile_image = $(".title-photo img").attr("src");

    const contributions = $('.info li:nth-child(2) span:nth-child(2)').text();
    const friends = $('.info li:nth-child(3)').text().trim().substring(11).replace(" users", "");
    
    // Extracting Fully Solved Questions
    const fully_solved_count = $("._UserActivityFrame_counterValue").eq(0).text();

    return { name, rating, highest_rating, profile_image, fully_solved_count, friends, contributions }

}