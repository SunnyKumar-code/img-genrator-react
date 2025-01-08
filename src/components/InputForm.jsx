import React, { useState } from 'react';

const InputForm = ({ onSearch }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSearch(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search for images..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: '10px',
          width: '70%',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;
