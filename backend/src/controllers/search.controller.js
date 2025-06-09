const googleService = require('../services/google.service');

exports.search = async (req, res, next) => {
  try {
    const { q } = req.query;
    const results = await googleService.search(q);
    res.json(results);
  } catch (error) {
    next(error);
  }
};