const expect = require('chai').expect;
const scraper = require('../../src/modules/scraper');
const nock = require('nock');

const mockResponse = 'mock response'

describe('scraper module spec', () => {

  beforeEach(() => {
    nock('https://www.mock.com')
      .get('/product/page1/?filter=ONLY_POSITIVE')
      .reply(200, mockResponse)
  })

  it('makes request to product page', () => {
    return scraper.scapePage('https://www.mock.com/product', 1, 'ONLY_POSITIVE')
      .then(response => {
        expect(response).to.equal(mockResponse)
      })
  })

})