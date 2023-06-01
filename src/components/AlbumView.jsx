import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonContext } from "../contexts/ButtonContext";

export default function AlbumView() {
  const navigate = useNavigate();

  const {stylingDiv, stylingBtn} = useContext(ButtonContext);

  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:4000/song/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setAlbumData(resData.results);
    };
    fetchData();
  }, [id]);

  const justSongs = albumData.filter((entry) => entry.wrapperType === "track");

  const navButtons = () => {
    return (
      <div style={stylingDiv}>
        <button style={stylingBtn} type="button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button style={stylingBtn} type="button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    );
  };

  const renderSongs = justSongs.map((song, i) => {
    return (
      <div key={i}>
        <p>{song.trackName}</p>
      </div>
    );
  });

  const showAlbumName = () => {
    return (albumData.length ? (
      <h3>{albumData[0].collectionName}</h3>
    ) : (
      <article aria-busy="true"></article>
    ));
  };

  const album_img = albumData[0].artworkUrl100;

  return (
    <div>
      {navButtons()}
      <img src={album_img} alt={albumData.collectionName} />
      {showAlbumName()}
      {renderSongs}
    </div>
  );
}
