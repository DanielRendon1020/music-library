import GalleryItem from "./GalleryItem";

export default function Gallery({ data }) {
  const galleryItems = data.map((item, index) => {
    return <GalleryItem key={index} item={item} />;
  });

  return (
    <div>
      {galleryItems}
    </div>
  );
}
