const axios = require('axios');
const config = require('../config');

exports.search = async (query) => {
  const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
    params: {
      key: config.google.apiKey,
      cx: config.google.engineId,
      q: query
    }
  });

  return {
    searchInformation: response.data.searchInformation,
    items: response.data.items || []
  };
};