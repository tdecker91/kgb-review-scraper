/**
 * @module parser
 */

const config = require('../config')
const cheerio = require('cheerio')
const Review = require('../models/review')

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
  const $ = cheerio.load(reviewSelection)
  let review = new Review()

  review.rating = parseRating($('.dealership-rating .hidden-xs.rating-static'))

  return review
}

/**
 * Parse rating from given rating selection
 * @param {Cheerio} ratingSelection 
 * @returns {number} the given rating for the review
 */
function parseRating(ratingSelection) {
  if (!ratingSelection || !ratingSelection[0]) {
    return null
  }

  const ratingRegex = /rating-(\d+)/g
  let classString = ratingSelection[0].attribs.class
  let match = ratingRegex.exec(classString)

  if(match && match[1]) {
    return parseInt(match[1])
  }

  return null
}

module.exports = {
  parseReviews: parseReviews
}