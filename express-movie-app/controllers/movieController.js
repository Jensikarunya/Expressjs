const { fetchMovies } = require('../lib/helper')
const axios = require('axios')

const getMovies = async (req, res) => {
    const limit = req.query.limit || 10 
    const searchQuery = req.query.search || ''
    const url = `https://freetestapi.com/api/v1/movies?limit=${limit}&search=${searchQuery}`

    try {
        const response = await axios.get(url)
        res.render('movies', { movies: response.data })
    } catch (error) {
        console.error('Error fetching movies:', error)
        res.status(500).send('Failed to fetch movies')
    }
}

const getMovieById = async (req, res) => {
    const movieId = req.params.id
    const url = `https://freetestapi.com/api/v1/movies/${movieId}`

    try {
        const response = await axios.get(url)
        res.render('movieDetails', { movie: response.data })
    } catch (error) {
        console.error('Error fetching movie:', error)
        res.status(500).send('Failed to fetch movie details')
    }
}

module.exports = { getMovies, getMovieById }