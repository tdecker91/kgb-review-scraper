/**
 * @module config
 */

let startingUrl
let pages
let filter
let reviewSelector
let top

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
    module.exports.top = commandArguments.top
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
  reviewSelector: reviewSelector,
  /**
   * number of top reviews to find.
   */
  top: top
}