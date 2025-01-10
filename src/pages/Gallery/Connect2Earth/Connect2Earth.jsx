import React from "react";
import "./connect2earth.css";


const Connect2Earth = () => {
  const images = [
    {
      id: 1,
      title: "Beach Sunset",
      imageUrl: "https://source.unsplash.com/600x400/?beach,sunset",
    },
    {
      id: 2,
      title: "Mountain Adventure",
      imageUrl: "https://source.unsplash.com/600x400/?mountain,hiking",
    },
    {
      id: 3,
      title: "City Lights",
      imageUrl: "https://source.unsplash.com/600x400/?city,night",
    },
    {
      id: 4,
      title: "Forest Path",
      imageUrl: "https://source.unsplash.com/600x400/?forest,path",
    },
    {
      id: 5,
      title: "Ocean Waves",
      imageUrl: "https://source.unsplash.com/600x400/?ocean,waves",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Memories | Project CONNECT2EARTH</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img
              src={image.imageUrl}
              alt={image.title}
              className="gallery-image"
            />
            <p className="gallery-caption">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect2Earth;
