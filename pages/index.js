import styles from "../styles/Home.module.css";
import { Box, Container, Link, Typography } from "@mui/material";
import NextLink from 'next/link'
import { getAll } from "../apis/movies";
import SearchForm from '../components/SearchForm';
import { useSearch } from '../hooks/search';
import Head from "next/head";

export default function HomePage(props) {
  const onSearch = useSearch()
  
  return (
    <Container className={styles.container}>
      <Head>
        <title>Movies</title>
      </Head>
      <Typography>
        This is a super-awesome demo Next.js app to show off ways to test various portions of Next using Cypress.
      </Typography>

      <Box py={2}>
        <SearchForm onSearch={onSearch} />
      </Box>

      <Link component={NextLink} href="/movies/list">List All</Link>
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
