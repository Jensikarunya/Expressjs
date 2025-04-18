const axios = require('axios')

// Fetch movies from API
const fetchMovies = async () => {
    try {
        const response = await axios.get('https://freetestapi.com/api/v1/movies')
        return response.data
    } catch (error) {
        console.error('Error fetching movies:', error)
        return []
    }
}

module.exports = { fetchMovies }