const assert = require('chai').assert;
const extract = require('../src/extract');

describe('Extract step from step definition', function() {
  it ('should return the gherkin text from the code', function() {
    const exampleCode = 'Then(/^the response status is (.*)$/, function (status) {assert.equal(this.responseStatus, status)});'
    const expected = [
      '(/^the response status is (.*)$',
      'the response status is (.*)'
    ];

    const extractedSteps = extract.extractSteps(exampleCode);
    assert.deepEqual(expected, extractedSteps);
  });

  it ('should return the gherkin text from single quote format', function() {
    const exampleCode = 'Then(\'the first result is {stringInDoubleQuotes}\', function() {});';
    const expected = [
      '(\'the first result is {stringInDoubleQuotes}\'',
      'the first result is {stringInDoubleQuotes}'
    ];

    const extractedSteps = extract.extractSteps(exampleCode);
    assert.deepEqual(expected, extractedSteps);
  });

  it ('should return matches for both syntaxes', function() {
    const exampleCode = 'Then(\'the first result is {stringInDoubleQuotes}\', function() {}Then(/^the response status is (.*)$/, function (status) {assert.equal(this.responseStatus, status)});'
    const expected = [
      '(\'the first result is {stringInDoubleQuotes}\'',
      '(/^the response status is (.*)$'
    ];
  });
});
