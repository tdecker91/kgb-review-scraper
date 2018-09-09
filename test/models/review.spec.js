const { expect } = require('chai')
const Review = require('../../src/models/review')

describe('review spec', () => {
  it('constructs a new review', () => {
    const review = new Review(5)
    expect(review.rating).to.equal(5)
  })
})