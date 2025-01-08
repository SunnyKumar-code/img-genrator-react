import React from 'react';

const ImageDisplay = ({ images }) => {
  if (!images || images.length === 0) {
    return <p style={{ textAlign: 'center' }}>No images found.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
      {images.map((image) => (
        <div key={image.id} style={{ maxWidth: '300px', margin: '10px' }}>
          <img
            src={image.urls.small}
            alt={image.alt_description || 'Unsplash Image'}
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ textAlign: 'center', marginTop: '5px' }}>{image.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
