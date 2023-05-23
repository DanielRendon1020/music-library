import { useContext } from "react";
import GalleryItem from "./GalleryItem";
import { DataContext } from "../contexts/DataContext";

export default function Gallery() {
  const data = useContext(DataContext);
  const galleryItems = data.map((item, index) => {
    return <GalleryItem key={index} item={item} />;
  });

  return (
    <div className="grid"
      // style={{
      //   display: "flex",
      //   flexWrap: "wrap",
      //   justifyContent: "space-evenly",
      //   alignItems: "center",
      //   alignContent: "center",
      //   transitionDuration: '0.5s',
      // }}
    >
      {galleryItems}
    </div>
  );
}
