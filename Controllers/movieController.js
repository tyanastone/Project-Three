const User = require('../models/User')
const Movie = require('../models/Movie')



const movieController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('movies')
            .then((user) => {
                res.send(user.movies)
            })
    },
    show: (req, res) => {
        let movieId = req.params.movieId
        Movie.findById(movieId)
            .then((movie) => {
                res.send(movie)
            })
    },
    delete: (req, res) => {
        let movieId = req.params.ideaId
        Movie.findByIdAndDelete(movieId)
            .then(() => {
                res.send(200)
            })
    }
}

    module.exports = movieController