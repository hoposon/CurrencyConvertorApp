// main configuration file
const config = {};

// ------------------------
// remote API calls 
// ------------------------

// get list of currencies URL
config.getCurrListURL = 'http://localhost:3000/getCurrencies';

// get statistics URL
config.getStatsURL = 'http://localhost:3000/stats';

// conversion API URL
config.conversionURL ='http://localhost:3000/convert';

// ------------------------
// Error handling
// ------------------------

// fatal error message
config.fatalErrorMessage = 'We are sorry, but something went really wrong. We have a problem to load your app. Please try it later';
// statistics error message
config.getStatsErrorMessage = 'Sorry, we can not get statistics right now. What you may see is probably not correct';
// conversion error message
config.convertErrorMessage = 'Sorry, we can not get convert right now. What you may see is probably not correct';
// rendering error message
config.renderingErrorMessage = 'We are sorry, but something went really wrong. We have a problem to load your app. Please try it later';


export default config;