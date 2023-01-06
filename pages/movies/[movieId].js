import { Button, Container, Divider, Typography } from "@mui/material";
import { getAll, getById } from "../../apis/movies";
import LeftChevron from "@mui/icons-material/ChevronLeft"
import { Router, useRouter } from "next/router";

export default function MovieDetail(props) {
  const router = useRouter()

  return (
   <Container>
    <Button variant="outlined" startIcon={<LeftChevron />} onClick={router.back}>
        Back
    </Button>

    <Typography variant="h6">Title</Typography>
    <Divider />
    <Typography>{props.movie.Title}</Typography>
     
    <Typography variant="h6">Year</Typography>
    <Divider />
    <Typography>{props.movie.Year}</Typography>

    <Typography variant="h6">Plot</Typography>
    <Divider />
    <Typography>{props.movie.Plot}</Typography>
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
