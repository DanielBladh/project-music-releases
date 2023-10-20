import React, { useState } from "react";
import data from "./data.json";
import Album from "./Album";
import Header from "./Header";
import PlayLists from "./PlayLists"

export const App = () => {
  const albums = data.albums.items;
  const [modalVisible, setModalVisible] = useState(false);
  const [sortType, setSortType] = useState(null);

  const [sidebarVisible, setSidebarVisible] = useState(false); 

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Function to sort albums based on album_type
  const sortAlbums = (type) => {
    setSortType(type);
  };

  const sortedAlbums = albums.filter((album) => {
    if (sortType === null) {
      return true; // Show all albums if no sorting type is selected
    }
    return album.album_type === sortType;
  });

  return (
    <div className="App">
      <div className="main-content">
        <div className="header">
          <Header />
          <div className="header-buttons">
            <div className="sortButtons">
              <button onClick={() => sortAlbums("album")}>Albums</button>
              <button onClick={() => sortAlbums("single")}>Singles</button>
              <button onClick={() => sortAlbums(null)}>Show All</button>
              <div className="playlist-button-container">
                <button onClick={toggleSidebar}>
                  {sidebarVisible ? "Close Playlists" : "Open Playlists"}
                </button>
              </div>
            </div>
          </div>
          {sidebarVisible && (
            <PlayLists
              modalVisible={modalVisible}
              toggleSidebar={toggleSidebar}
            />
          )}
        </div>
        <div className="album-list">
          {sortedAlbums.map((album, index) => (
            <Album key={index} albumData={album} />
          ))}
        </div>
      </div>
    </div>
  );
};
