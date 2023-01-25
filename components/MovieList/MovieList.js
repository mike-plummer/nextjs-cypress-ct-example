import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MovieIcon from "@mui/icons-material/LocalMovies"
import NextLink from 'next/link'

export default function MovieList(props) {
  return (
    <List>
        {props.movies.map((movie) => (
          <ListItem disablePadding key={movie.id} data-cy={`movie-list-item-${movie.id}`}>
            <ListItemButton component={NextLink} href={`/movies/${movie.id}`}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary={movie.Title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  )
}