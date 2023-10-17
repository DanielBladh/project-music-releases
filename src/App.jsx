import React, { useState } from "react";
import data from "./data.json";
import Album from "./Album";
import PlayLists from "./PlayLists";

export const App = () => {
  const albums = data.albums.items;
  const [modalVisible, setModalVisible] = useState(false);
  const [sortType, setSortType] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
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
          <button
            className={`playlist-button ${modalVisible ? "active" : ""}`}
            onClick={toggleModal}
          >
            {modalVisible ? "Close Playlists" : "Open Playlistssssssssssssssssssssssssssss"}
          </button>
          {modalVisible && (
            <PlayLists modalVisible={modalVisible} closeModal={closeModal} />
          )}
          <h1 className="main-title">New Albums & Singles</h1>
          <h4 className="sub-title">By Daniel Bladh Stenberg</h4>
            <h4 className="sortTitle">Sort by Album/Single</h4>
          <div className="sortButtons">
            <button onClick={() => sortAlbums("album")}>Albums</button>
            <button onClick={() => sortAlbums("single")}>Singles</button>
            <button onClick={() => sortAlbums(null)}>Show All</button>
          </div>
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
