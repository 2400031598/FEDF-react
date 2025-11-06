// logger.js

function logger(req, res, next) {
  const now = new Date();
  console.log(`[${now.toLocaleString()}] ${req.method} ${req.url}`);
  next(); // continue to the next middleware or route
}

module.exports = logger;