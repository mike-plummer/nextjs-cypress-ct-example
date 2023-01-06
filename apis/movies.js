import Data from './movies.json'

export async function getAll() {
    return Data.movies.sort((a, b) => a.Title.localeCompare(b.Title))
}

export async function getById(id) {
    return await (getAll()).find((movie) => movie.id === id)
}
