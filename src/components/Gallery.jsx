import { useContext } from "react";
import GalleryItem from "./GalleryItem";
import { DataContext } from "../contexts/DataContext";

export default function Gallery() {
  const data =  useContext(DataContext);
  const galleryItems = data.map((item, index) => {
    return <GalleryItem key={index} item={item} />;
  });

  return (
    <div>
      {galleryItems}
    </div>
  );
}
