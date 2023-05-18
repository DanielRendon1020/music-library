import { useState, useEffect } from 'react';
import './App.css';
import Searchbar from './components/SearchBar';
import Gallery from './components/Gallery';


function App() {
  let [search, setSearch] = useState('Jack White');
  let [message, setMessage] = useState('Search for Musix');
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
      const resData = await response.json();
      console.log(resData);
      if(resData.results.length) {
        setData(resData.results)
      } else{
        setMessage(`No Results Found for ${search}`)
      }
    }
    if(search){
      fetchData();
    
    }
  }, [search])

  const handleSearch = (e,term) => {
    e.preventDefault();
    setSearch(term);
  
  }


  return (
    <div className="App">
      <Searchbar handleSearch={handleSearch}/>
      {message}
      <Gallery data={data}/>
    </div>
  );
}

export default App;
