# Dealer Rater Review Scraper
Discover suspiciously positive reviews on KGB dealer rater site.

## Running the app
  * Install [Node.js and npm](nodejs.org)
(npmjs.org)
  * Install Dependencies `npm install` run from project root.
  * `npm start` to run the application

## Options
Optional command line flags can be passed in to alter the application behaviour

Example `npm start -- --pages=5`

Flag | Description
------------ | ------------
startingUrl | product page to scrape reviews from
pages | number of pages of reviews to scrape
filter | review list filter

## Test Suite
All tests are located in `/test`. The folder structure should match that of `/src`. For example the scraper module is located in `/src/modules/scraper.js` and the test file is `/test/modules/scraper.spect.js`

Test files should be named to match thier source counterpart with `.test.js` as the extension.

To run the test suite run either of the following commands after a full npm install.

```npm test```

OR

```mocha 'test/**/*.spec.js'```

## Documentation
This project include [jsDoc](http://usejsdoc.org) annotations. 

Install jsdoc by running `npm install -g jsdoc`

Running `jsdoc src -r -d docs` will generate the docs in `/docs`