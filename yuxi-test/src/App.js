import { useState} from 'react'
import './App.css';
import SearchBar from './components/SearchBar'
import ResultPage from './components/ResultPage'

function App() {

  const [searchResults, setSearchResults] = useState([])

  return (
    <div className='App'>
      <div>
        <h1>Yuxi Bing Search Callenge</h1>
      </div>
      <SearchBar setSearchResults={setSearchResults}/>
      <ResultPage searchResults={searchResults} />
    </div>
  );
}

export default App;
