require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  google: {
    apiKey: process.env.GOOGLE_API_KEY,
    engineId: process.env.GOOGLE_ENGINE_ID
  }
};