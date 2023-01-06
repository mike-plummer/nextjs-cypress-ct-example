import Data from './movies.json'

export async function getAll() {
    console.log('DB fetch all')

    return Data.movies.sort((a, b) => a.Title.localeCompare(b.Title))
}

export async function getById(id) {
    console.log('DB fetch by ID')

    return Data.movies.find((movie) => movie.id === id)
}

export async function search(title) {
    console.log('DB search by title')

    return Data.movies.filter((movie) => movie.Title.toLowerCase().includes(title.toLowerCase()))
}