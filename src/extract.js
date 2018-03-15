const extract = {};

extract.extractSteps = function extractStep(code) {
  const regEx = /\(\/\^(.*?)\$/g;
  const extractedArray = regEx.exec(code);
  return extractedArray;
}

module.exports = extract;
