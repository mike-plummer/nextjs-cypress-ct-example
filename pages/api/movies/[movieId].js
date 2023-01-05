import Data from './movies.json'

export default function handler(req, res) {
  const { movieId } = req.query

  if (Number.isNaN(Number(movieId))) {
    res.status(400).end()
  }

  const movie = Data.movies.find((movie) => movie.id === Number(movieId))
  if (movie) {
    res.status(200).json(movie)
  } else {
    res.status(404).end()
  }
}
