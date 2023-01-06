import { Container, Typography } from "@mui/material";
import { search } from "../../apis/movies";
import MovieList from "../../components/MovieList";

export default function MovieSearchResults(props) {
 return (
   <Container>
     <Typography>Search results for "{props.searchValue}"</Typography>
     <MovieList movies={props.movies} />
   </Container>
 );
}

export async function getServerSideProps({ query }) {
  const searchValue = query.title

  const movies = await (await fetch(`http://localhost:3000/api/movies/search?title=${encodeURIComponent(searchValue)}`)).json()

  return {
    props: {
      searchValue,
      movies
    }
  }
}
