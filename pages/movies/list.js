import { Container } from "@mui/material";
import { getAll } from "../../apis/movies";
import MovieList from "../../components/MovieList";

export default function MoviesListPage(props) {
 return (
   <Container>
     <MovieList movies={props.movies} />
   </Container>
 );
}

export async function getStaticProps({ params }) {
  const movies = await getAll()

  return {
    props: {
      movies
    }
  }
}
