import { useState, useCallback } from 'react'
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'
import { Container, Button, TextField, InputAdornment, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { getAll } from "../apis/movies";

export default function Home(props) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = useCallback(async (evt) => {
    evt.preventDefault()
    await router.push({
      pathname: '/movies/search',
      query: {
        title: searchValue
      }
    })
    return false
  }, [router, searchValue])
  
  return (
    <Container className={styles.container}>
      <form onSubmit={handleSearch} action="">
        <TextField
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.currentTarget.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" type="submit">Search</Button>
      </form>

      <Link href="/movies/list">List All</Link>
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
