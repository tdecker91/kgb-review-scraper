const config = require('./config')
const args = require('./config/commandArguments')
const scraper = require('./modules/scraper')


async function main() {
  const page1reviews = await scraper.scrapePage(config.startingUrl, 1, config.filter)
  console.log(page1reviews)
}

if (require.main == module) {
  config.buildConfig(args)
  main()
}