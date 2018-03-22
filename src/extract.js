const extract = {};

extract.extractSteps = function extractStep(code) {
  let slashFormatMatches = [];
  let quoteFormatMatches = [];
  let matches = [];

  const slashFormat = /\(\/\^(.*?)\$/g;
  slashFormatMatches = slashFormat.exec(code);

  const quoteFormat = /\('(.*?)\'/g;
  quoteFormatMatches = quoteFormat.exec(code);

  if (matchedSlashFormat(slashFormatMatches) && matchedQuoteFormat(quoteFormatMatches)) {
    matches = slashFormatMatches.concat(quoteFormatMatches);
  } else if (matchedSlashFormat(slashFormatMatches)) {
    matches = slashFormatMatches;
  } else if (matchedQuoteFormat(quoteFormatMatches)) {
    matches = quoteFormatMatches;
  }

  return matches;
}

function matchedSlashFormat(slashFormatMatches) {
 return slashFormatMatches !== null;
}

function matchedQuoteFormat(quoteFormatMatches) {
  return quoteFormatMatches !== null;
}

module.exports = extract;
