// FILE: src/controllers/docs.controller.js
exports.getApiDocs = (req, res) => {
  const docs = {
    message: "Welcome to News Aggregator",
    endpoints: [
      {
        path: "/",
        method: "GET",
        description: "API documentation"
      },

      {
        path: "/api/search",
        method: "GET",
        description: "Search endpoint",
        example: "/api/search?q=javascript",
      },

      {
        path: "/api/test",
        method: "GET",
        description: "Test endpoint",
        example: "/api/test",
      }
    ],
  };

  res.json(docs);
};