import { Container } from "@mui/material";
import { getAll } from "../../apis/movies";
import MovieList from "../../components/MovieList";
import Head from "next/head";

export default function MoviesListPage(props) {
 return (
   <Container>
      <Head>
        <title>Movies List</title>
      </Head>

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
