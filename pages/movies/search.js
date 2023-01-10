import { Container, Typography } from "@mui/material";
import MovieList from "../../components/MovieList";
import Head from "next/head";

export default function MovieSearchResultsPage(props) {
 return (
   <Container>
      <Head>
        <title>Search Results</title>
      </Head>

     <Typography>Search results for "{props.searchValue}"</Typography>
     <MovieList movies={props.movies} />
   </Container>
 );
}

export async function getServerSideProps({ query }) {
  const searchValue = query.title

  let movies
  const searchResponse = await fetch(`http://localhost:3000/api/movies/search?title=${encodeURIComponent(searchValue)}`)
  if (searchResponse.status === 200) {
    movies = await searchResponse.json()
  } else {
    // TODO This handles 204 (no results) and errors - differentiate and add error reporting
    movies = []
  }

  return {
    props: {
      searchValue,
      movies
    }
  }
}
