const { expect } = require('chai')
const scoring = require('../../src/modules/scoring')

const mockReview = {
  rating: 50,
  date: '',
  title: 'This is the review title',
  body: 'I got some service and it was really great! A bunch of employees there helped me',
  username: 'tpain',
  employees: 5
}

describe('scoring spec', () => {
  it('should return a score', () => {
    expect(scoring.scoreReview(mockReview)).to.be.ok
  })

  it('handles missing values', () => {
    expect(scoring.scoreReview({})).to.equal(0)
  })
})