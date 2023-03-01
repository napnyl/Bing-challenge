import { React, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { getResults } from '../api/bing'

const SearchBar = ({ setSearchResults }) => {

  const handleSubmit = (e) => e.preventDefault()
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
      setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    doSearch()
  }

  function handleOnKeyDown(event) {
    if(event.key === 'Enter'){
      doSearch()
    }
  }

  function doSearch(){
    if(searchTerm){
      getResults(searchTerm).then(json => {
        setSearchResults(json)
      })
    }
  }

  return(
    <header>
      <FormControl className="search" onSubmit={handleSubmit} sx={{ m: 1, width: '30ch' }} variant="outlined">
      <InputLabel>Bing Search</InputLabel>
      <OutlinedInput
        required={true}
        id="bing-search"
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              onClick={handleSearchClick}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Bing Search"
      />
    </FormControl>
    </header>
  );
}

export default SearchBar;