const requestLogger = (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`)
    next()
}

const authMiddleware = (req, res, next) => {
    const authorized = true
    if (!authorized) {
        return res.status(403).send('Access denied')
    }
    next()
}

module.exports = { requestLogger, authMiddleware }