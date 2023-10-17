import React from "react";
import data from "./stretched-goal.json";
import "./index.css";

function PlayLists({ modalVisible, closeModal }) {
  const { items } = data.playlists;

  return (
    <div className={`sidebar ${modalVisible ? "modal-active" : ""}`}>
      {/* <button className="close-button" onClick={closeModal}>
        Close
      </button> */}
      <h3>Playlists</h3>
      <div className="sidebar-playlist-list">
        {items.map((playlist) => (
          <div key={playlist.id} className="sidebar-playlist-item">
            <img
              src={playlist.images[0].url}
              alt={playlist.name}
              width="80"
              height="80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayLists;
