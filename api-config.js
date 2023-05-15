const apiKey = '472c5b72086802de5eb62410d0a01b4e';
const symbolListUrl = `https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=${apiKey}`;

// Make a GET request to the API endpoint
fetch(symbolListUrl)
  .then(response => response.json())
  .then(symbolList => {
    const targetSymbol = 'AAPL'; // The symbol you want to check
    if (symbolList.includes(targetSymbol)) {
      console.log(`${targetSymbol} has financial statements available`);
    } else {
      console.log(`${targetSymbol} does not have financial statements available`);
    }
  })
  .catch(error => console.log(error));