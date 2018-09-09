/**
 * @module parser
 */

const cheerio = require('cheerio')
const config = require('../config')
const Review = require('../models/review')

/**
 * Parse product reviews from a page's html content
 * @param {string} html page html text to parse reviews from
 * @returns {Array<Review>} list of reviews parsed from the page
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
 * @returns {Review} reviewSelection 
 */
function parseReview(reviewSelection) {
  const $ = cheerio.load(reviewSelection)
  const reviewWrapperSelection = $('.review-wrapper')
  let review = new Review()

  review.rating = parseRating($('.dealership-rating .hidden-xs.rating-static'))
  review.date = parseDate($('.review-date .italic'))
  review.username = parseUsername(reviewWrapperSelection)
  review.title = parseTitle(reviewWrapperSelection)
  review.body = parseBody(reviewWrapperSelection)
  review.employees = parseEmployees(reviewWrapperSelection)

  return review
}

/**
 * Parse rating from given rating selection
 * @param {Cheerio} ratingSelection 
 * @returns {number} the given rating for the review. null if rating can't be found
 */
function parseRating(ratingSelection) {
  if (!ratingSelection || !ratingSelection[0]) {
    return null
  }

  const ratingRegex = /rating-(\d+)/g
  let classString = ratingSelection[0].attribs.class
  let match = ratingRegex.exec(classString)

  if(match && match[1]) {
    return parseInt(match[1])/10
  }

  return null
}

/**
 * Extract the date from the review
 * @param {Cheerio} dateSelection 
 * @returns {string} the date the review was submitted
 */
function parseDate(dateSelection) {
  return dateSelection.text().trim()
}

/**
 * Extract the username from the review
 * @param {Cheerio} reviewWrapperSelection
 * @returns {string} the username. null if username can't be found
 */
function parseUsername(reviewWrapperSelection) {
  const username = reviewWrapperSelection.find('.margin-bottom-sm .italic')
  const usernameRegex = /- (.*)/g
  let match = usernameRegex.exec(username.text().trim())

  if(match && match[1]) {
    return match[1]
  }

  return null
}

/**
 * Extract the title from the review
 * @param {Cheerio} reviewWrapperSelection
 * @returns {string} the title
 */
function parseTitle(reviewWrapperSelection) {
  return reviewWrapperSelection.find('.margin-bottom-sm .no-format').text().trim()
}

/**
 * Extract the body from the review
 * @param {Cheerio} reviewWrapperSelection
 * @returns {string} the review body
 */
function parseBody(reviewWrapperSelection) {
  return reviewWrapperSelection.find('p.review-content').text().trim()
}

/**
 * Extract employees from the review
 */
function parseEmployees(reviewWrapperSelection) {
  return reviewWrapperSelection.find('.employees-wrapper .review-employee').length
}

module.exports = {
  parseReviews: parseReviews
}