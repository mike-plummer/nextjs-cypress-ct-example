import { getAll } from '../../../apis/movies'

export default async function handler(req, res) {
  console.log('API fetch all')

  const movies = await getAll()
  res.status(200).json(movies)
}
