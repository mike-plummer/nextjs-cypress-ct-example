import { Container } from "@mui/material";
import { getAll, getById } from "../../apis/movies";

export default function MovieDetail(props) {
 return (
   <Container>
     {props.movie.Title}
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
