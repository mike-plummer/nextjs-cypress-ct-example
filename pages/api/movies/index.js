import Data from './movies.json'

export default function handler(req, res) {
  res.status(200).json(Data.movies)
}
