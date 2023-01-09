import { useCallback, useState } from 'react'
import { InputAdornment, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm(props) {
  const [title, setTitle] = useState('')
  const handleSearch = useCallback(async (evt) => {
    evt.preventDefault()
    props.onSearch({ title })
    return false
  }, [title, props.onSearch])

  return (
    <form onSubmit={handleSearch} action="">
      <TextField
        data-cy="search-field"
        label="Search"
        variant="outlined"
        value={title}
        onChange={(evt) => setTitle(evt.currentTarget.value)}
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
  )
}
