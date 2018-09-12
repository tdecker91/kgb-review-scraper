const { expect } = require('chai')
const config = require('../../src/config')

const mockCommandArgs = {
  startingUrl: 'url',
  pages: 9,
  filter: 'filter',
  reviewSelector: 'selector',
  top: 4
}

describe('config spec', () => {
  it('builds the config', () => {
    config.buildConfig(mockCommandArgs)
    expect(config.startingUrl).to.equal(mockCommandArgs.startingUrl)
    expect(config.pages).to.equal(mockCommandArgs.pages)
    expect(config.filter).to.equal(mockCommandArgs.filter)
    expect(config.reviewSelector).to.equal(mockCommandArgs.reviewSelector)
    expect(config.top).to.equal(mockCommandArgs.top)
  })
});