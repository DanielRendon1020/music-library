import { useState, useRef } from "react";
import "./App.css";
import Searchbar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { DataContext } from "./contexts/DataContext";
import { SearchContext } from "./contexts/SearchContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";

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
    <div className="container app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                  <Gallery />
                </DataContext.Provider>
              </>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
