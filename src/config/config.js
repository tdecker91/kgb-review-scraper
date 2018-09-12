/**
 * @module config
 */

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
  startingUrl: null,
  /**
   * Number of review list pages the scraper will parse through
   */
  pages: null,
  /**
   * Review filter
   */
  filter: null,
  /**
   * CSS selector for product reviews
   */
  reviewSelector: null,
  /**
   * number of top reviews to find.
   */
  top: null
}