import { search } from "../../../apis/movies"

export default async function handler(req, res) {
  console.log('API search by title')
  
  const { title } = req.query

  if (!title) {
    res.status(400).end()
  } else {
    const movies = await search(title)
    if (movies.length) {
      res.status(200).json(movies)
    } else {
      res.status(204).end()
    }
  }
}
