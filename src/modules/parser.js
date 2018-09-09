/**
 * @module parser
 */

const config = require('../config')
const cheerio = require('cheerio')

/**
 * 
 * @param {string} html page html text to parse reviews from
 * @returns {Array} list of reviews parsed from the page
 */
function parseReviews(html) {
  const $ = cheerio.load(html)

  let reviews = []
  $(config.reviewSelector).each((index, element) => {
    reviews.push(parseReview(element))
  })

  return reviews
}

/**
 * Parse review object from the html selection
 * @param {Cheerio} reviewSelection 
 */
function parseReview(reviewSelection) {
  return {}
}

module.exports = {
  parseReviews: parseReviews
}