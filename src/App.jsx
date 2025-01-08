import React, { useState } from 'react';
import { searchImages } from './api';
import ParticleCursor from "./components/ParticleCursor";
import InputForm from './components/InputForm';
import ImageDisplay from './components/ImageDisplay';


const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    try {
      setError('');
      const results = await searchImages(query);
      setImages(results);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div id='app' style={{ padding: '20px', textAlign: 'center',  width:"100%" ,margin:"auto"}}>
      <h1>Unsplash Image Search</h1>
      <InputForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ImageDisplay images={images} />
      <ParticleCursor />
    </div>
  );
};

export default App;
