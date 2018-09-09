/**
 * Module for scoring how overly positive a review is
 * @module scoring
 */

module.exports = {
  /**
   * Scores a review and returns a ranking of how positive the review is.
   * rank is given by the following `(starRating + employeeReviews) * reviewLength`
   * If the review is missing any of those properties then the ranking will be 0
   * @param {Review} review
   * @returns {number} ranking for how positive the review is
   */
  scoreReview: (review) => {
    if (!review || !review.rating || !review.employees || !review.body) {
      return 0
    }

    return (review.rating + review.employees) * review.body.length
  }
}