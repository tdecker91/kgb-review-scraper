/**
 * @module config
 */

let startingUrl
let pages
let filter
let reviewSelector

/**
 * app configuration
 */
module.exports = {
  /**
   * Build config from command arguments
   */
  buildConfig: (commandArguments) => {
    module.exports.startingUrl = commandArguments.startingUrl
    module.exports.pages = commandArguments.pages
    module.exports.filter = commandArguments.filter
    module.exports.reviewSelector = commandArguments.reviewSelector
  },
  /**
   * Product page to scraper will start on
   */
  startingUrl: startingUrl,
  /**
   * Number of review list pages the scraper will parse through
   */
  pages: pages,
  /**
   * Review filter
   */
  filter: filter,
  /**
   * CSS selector for product reviews
   */
  reviewSelector: reviewSelector
}