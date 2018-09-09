/**
 * @module scraper
 */

const rp = require('request-promise')
const parser = require('./parser')

/**
 * builds url from criteria
 * @param {string} productUrl 
 * @param {number} page 
 * @param {string} filter 
 * @returns {string} url to request
 */
function buildRequestUrl(productUrl, page, filter) {
  let requestUrl = `${productUrl}/page${page}`
  
  if (filter) {
    return `${requestUrl}/?filter=${filter}`
  }

  return requestUrl
}

/**
 * Scrapes reviews on a url and given list page number
 * 
 * @param {string} url dealer rater product review page
 * @param {number} page review list page number
 * @param {string} filter review list filter (all reviews, only positive, only negative)
 * @returns {Array<Review>} reviews on the page
 */
async function scrapePage(url, page, filter) {
  const requestUrl = buildRequestUrl(url, page, filter)

  return rp(requestUrl).then(response => {
    return parser.parseReviews(response)
  })
}

module.exports = {
  scrapePage: scrapePage
}