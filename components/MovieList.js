import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MovieIcon from "@mui/icons-material/LocalMovies"

export default function MovieList(props) {
  return (
    <List>
        {props.movies.map((movie) => (
          <ListItem disablePadding key={movie.id}>
            <ListItemButton component="a" href={`/movies/${movie.id}`}>
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