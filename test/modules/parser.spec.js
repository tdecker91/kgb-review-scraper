const { expect } = require('chai')
const parser = require('../../src/modules/parser')
const config = require('../../src/config')

const mockPageHTML = `
  <div id="mock-reviews">
    <div class="review-entry">
      <div class="dealership-rating">
        <div class="hidden-xs margin-center rating-25 rating-static"></div>
      </div>
      <div class="review-date">
        <div class="italic">
          Some Mock Date
        </div>
      </div>
      <div class="review-wrapper">
        <div class="margin-bottom-sm line-height-150">
            <h3 class="no-format inline italic-bolder font-20 dark-grey">Mock Title</h3>
            <span class="italic font-18 black notranslate">- username</span>
        </div>
        <p class="review-content">
          Mock review body
        </p>
        <div class="employees-wrapper">
          <div class="review-employee"></div>
          <div class="review-employee"></div>
          <div class="review-employee"></div>
        </div>
      </div>
    </div>
  </div>
`

const emptyRating = `
  <div id="mock-reviews">
    <div class="review-entry">
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
    
    expect(reviews[0].rating).to.equal(2.5)
  })
  
  it('handles no rating found', () => {
    const reviews = parser.parseReviews(emptyRating)
    
    expect(reviews[0].rating).to.be.null
  })
  
  it('finds date', () => {
    const reviews = parser.parseReviews(mockPageHTML)
    
    expect(reviews[0].date).to.equal('Some Mock Date')
  })
  
  it('finds username', () => {
    const reviews = parser.parseReviews(mockPageHTML)
    
    expect(reviews[0].username).to.equal('username')
  })
  
  it('finds title', () => {
    const reviews = parser.parseReviews(mockPageHTML)
    
    expect(reviews[0].title).to.equal('Mock Title')
  })
  
  it('finds body', () => {
    const reviews = parser.parseReviews(mockPageHTML)
    
    expect(reviews[0].body).to.equal('Mock review body')
  })
  
  it('finds employees', () => {
    const reviews = parser.parseReviews(mockPageHTML)
    
    expect(reviews[0].employees).to.equal(3)
  })

})