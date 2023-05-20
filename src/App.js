import { useState, useRef } from "react";
import "./App.css";
import Searchbar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { DataContext } from "./contexts/DataContext";
import { SearchContext } from "./contexts/SearchContext";

function App() {
  let [message, setMessage] = useState("Search for Music");
  let [data, setData] = useState([]);
  let searchInput = useRef("");


  const handleSearch = (e, search) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        document.title = `${search} Music`;
        const response = await fetch(
          `https://itunes.apple.com/search?term=${search}`
        );
        const resData = await response.json();
        console.log(resData);
        if (resData.results.length) {
          setData(resData.results);
          setMessage("");
        } else {
          setMessage(`No Results Found for ${search}`);
        }
      } catch (e) {
        console.log(e);
      }
    };
    if (search) {
      fetchData();
    }
  };

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          term: searchInput,
          handleSearch,
        }}
      >
        <Searchbar />
      </SearchContext.Provider>
      <div>{message}</div>
      <DataContext.Provider value={data}>
        <Gallery className="container" />
      </DataContext.Provider>
    </div>
  );
}

export default App;
