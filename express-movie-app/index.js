const express = require('express')
const path = require('path')
const movieRoutes = require('./routes/movies')
const { requestLogger, authMiddleware } = require('./lib/middleware')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

// Apply middleware
app.use(requestLogger)
app.use('/movies', authMiddleware)

// Use routes
app.use('/movies', movieRoutes)

app.get('/', (req, res) => res.render('index'))

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))