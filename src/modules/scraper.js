/**
 * @module scraper
 */

const rp = require('request-promise');
const cheerio = require('cheerio');

/**
 * Scrapes reviews on a url and given list page number
 * 
 * @param {string} url dealer rater product review page
 * @param {number} page review list page number
 * @param {string} filter review list filter (all reviews, only positive, only negative)
 */
async function scrapePage(url, page, filter) {
  let requestUrl = `${url}/page${page}`
  if (filter) {
    requestUrl = `${requestUrl}/?filter=${filter}`
  }

  const requestOptions = {
    uri: requestUrl,
    transform: (body) => cheerio.load(body)
  }

  return rp(requestOptions)
}

module.exports = {
  scapePage: scrapePage
}