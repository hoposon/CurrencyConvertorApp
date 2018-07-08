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


export default config;