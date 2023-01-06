import { getAllMovies } from '../../../apis/movies'

export default async function handler(req, res) {
  const movies = await getAllMovies()
  res.status(200).json(movies)
}
