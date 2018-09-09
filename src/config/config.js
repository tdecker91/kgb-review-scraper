/**
 * @module config
 */

const commandArguments = require('./commandArguments')


/**
 * app configuration
 */
module.exports = {
  /**
   * Product page to scraper will start on
   */
  startingUrl: commandArguments.startingUrl,
  /**
   * Number of review list pages the scraper will parse through
   */
  pages: commandArguments.pages
}