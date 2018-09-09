const commandLineArgs = require('command-line-args')

const defaultStartingURL = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/'
const defaultPagesToScrape = 5
const defaultTop = 3
const defaultFilter = 'ALL_REVIEWS'
const defaultReviewSelector = '#reviews .review-entry'

const argumentDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'startingUrl', type: String, defaultValue: defaultStartingURL },
  { name: 'pages', type: Number, defaultValue: defaultPagesToScrape },
  { name: 'filter', type: String, defaultValue: defaultFilter },
  { name: 'reviewSelector', type: String, defaultValue: defaultReviewSelector },
  { name: 'top', type: Number, defaultValue: defaultTop },
]

module.exports = commandLineArgs(argumentDefinitions)