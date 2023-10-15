import React from 'react';
import data from './data.json';
import Album from './Album'; 

export const App = () => {
  const albums = data.albums.items;

  return (
    <div className="App">
      <h1>Music Releases</h1>
      <div className="album-list">
        {albums.map((album, index) => (
          <Album key={index} albumData={album} />
        ))}
      </div>
    </div>
  );
};
