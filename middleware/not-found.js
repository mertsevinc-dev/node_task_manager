// Desc: 404 not found middleware
const notFound = (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Cannot find ${req.originalUrl} on this server!`,
  })
}

module.exports = notFound
