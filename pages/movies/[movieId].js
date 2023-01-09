import { Box, Container } from "@mui/material";
import { getAll, getById } from "../../apis/movies";
import MovieDetail from "../../components/MovieDetail";
import BackButton from '../../components/BackButton'

export default function MovieDetailPage(props) {
  return (
    <Container>
      <BackButton />

      <Box py={2}>
        <MovieDetail movie={props.movie} />
      </Box>
    </Container>
  );
}

export async function getStaticPaths() {
  const movies = await getAll()
  return {
    paths: movies.map((movie) => `/movies/${movie.id}`),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const movie = await getById(Number(params.movieId)) ?? null

  return {
    props: {
      movie
    }
  }
}
