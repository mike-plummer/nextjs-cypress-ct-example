import { getById } from "../../../apis/movies"

export default async function handler(req, res) {
  console.log('API fetch by ID')
  
  const { movieId } = req.query
  const idAsNumber = Number(movieId)

  if (Number.isNaN(idAsNumber)) {
    res.status(400).end()
  }

  const movie = await getById(idAsNumber)
  if (movie) {
    res.status(200).json(movie)
  } else {
    res.status(404).end()
  }
}
