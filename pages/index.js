import styles from "../styles/Home.module.css";
import { Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MovieIcon from '@mui/icons-material/LocalMovies';
import { getAll } from "../apis/movies";

export default function Home(props) {
 return (
   <Container className={styles.container}>
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
   </Container>
 );
}

export async function getStaticProps() {
  const movies = await getAll()

  return {
    props: {
      movies
    }
  }
}
