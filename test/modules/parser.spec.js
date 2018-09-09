const { expect } = require('chai')
const parser = require('../../src/modules/parser')
const config = require('../../src/config')

const mockPageHTML = `
  <div id="mock-reviews">
    <div class="review-entry">
      <div class="dealership-rating">
        <div class="hidden-xs margin-center rating-25 rating-static"></div>
      </div>
    </div>
  </div>
`

describe('parser module spec', () => {

  beforeEach(() => {
    config.buildConfig({
      reviewSelector: '#mock-reviews .review-entry'
    })
  })

  it('finds reviews', () => {
    const reviews = parser.parseReviews(mockPageHTML)

    expect(reviews.length).to.equal(1)
  })

  it('finds rating value', () => {
    const reviews = parser.parseReviews(mockPageHTML)

    expect(reviews[0].rating).to.equal(25)
  })

})