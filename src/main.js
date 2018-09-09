const config = require('./config')
const args = require('./config/commandArguments')
const scraper = require('./modules/scraper')
const scoring = require('./modules/scoring')

async function main() {
  let reviews = [];

  for (var i = 0; i < config.pages; i++) {
    console.log(`Requesting reviews from page ${i+1}`);
    const pageReviews = await scraper.scrapePage(config.startingUrl, i, config.filter);
    reviews = reviews.concat(pageReviews)
  }

  const topReviews = reviews.map(review => {
    return {
      review,
      score: scoring.scoreReview(review)
    }
  }).sort((a, b) => {
    return b.score - a.score
  }).slice(0, config.top)

  console.log(`Top ${config.top} reviews`)
  topReviews.map(scoredReview => console.log(scoredReview.review))
}

if (require.main == module) {
  config.buildConfig(args)
  main()
}