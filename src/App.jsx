import React from 'react';
import data from './data.json';
import Album from './Album'; 

export const App = () => {
  const albums = data.albums.items;

  return (
    <div className="App">
      <h1 className='main-title'>New Albums & Singles</h1>
      <h4 className='sub-title'>By Daniel Bladh Stenberg</h4>
      <div className="album-list">
        {albums.map((album, index) => (
          <Album key={index} albumData={album} />
        ))}
      </div>
    </div>
  );
};
