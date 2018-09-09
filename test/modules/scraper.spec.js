const { assert } = require('chai');
const scraper = require('../../src/modules/scraper');
const nock = require('nock');

const mockResponse = 'mock response'

describe('scraper module spec', () => {

  it('makes request to product page', () => {
    nock('https://www.mock.com')
      .get('/product/page1/?filter=ONLY_POSITIVE')
      .reply(200, mockResponse)

    return scraper.scapePage('https://www.mock.com/product', 1, 'ONLY_POSITIVE')
      .then(response => {
        assert.isOk(response)
      })
  })

  it('should reject bad requests', () => {
    nock('https://www.mock.com')
      .get('/product/page1/?filter=ONLY_POSITIVE')
      .replyWithError('something bad happened')

    return scraper.scapePage('https://www.mock.com/product', 1, 'ONLY_POSITIVE')
      .then(
        () => Promise.reject(new Error('Expected method to reject.')),
        err => assert.instanceOf(err, Error)
      )
  })

})