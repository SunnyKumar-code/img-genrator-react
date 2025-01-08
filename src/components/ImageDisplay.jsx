import React from 'react';

const ImageDisplay = ({ images }) => {
  if (!images || images.length === 0) {
    return <p style={{ textAlign: 'center' }}>No images found.</p>;
  }

  return (
    <div className="masonry-grid">
      {images.map((image) => (
        <a
          href={image.urls.full}
          target="_blank"
          rel="noopener noreferrer"
          className="imageDiv"
          key={image.id}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description || 'Unsplash Image'}
          />
          <p>{image.user.name}</p>
        </a>
      ))}
    </div>
  );
};

export default ImageDisplay;
