import { Button, Container } from "@mui/material";
import { getAll, getById } from "../../apis/movies";
import LeftChevron from "@mui/icons-material/ChevronLeft"
import { useRouter } from "next/router";
import MovieDetail from "../../components/MovieDetail";

export default function MovieDetailPage(props) {
  const router = useRouter()

  return (
   <Container>
    <Button variant="outlined" startIcon={<LeftChevron />} onClick={router.back}>
        Back
    </Button>

    <MovieDetail movie={props.movie} />
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
