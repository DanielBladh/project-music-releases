import React from "react";
import data from "../stretched-goal.json";
import "../index.css";

function PlayLists({ modalVisible, toggleSidebar }) {
  const { items } = data.playlists;
  return (
    <div className={`sidebar ${modalVisible ? "modal-active" : ""}`}>
      <div className="sidebar-playlist-list">
        <div className="editor-picks-header">
          <h2>{data.message}</h2>
          <button className="close-button" onClick={toggleSidebar}>
            X
          </button>
        </div>
        {items.map((playlist) => (
          <div key={playlist.id} className="sidebar-playlist-item">
            <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <img
              src={playlist.images[0].url}
              alt={playlist.name}
              width="80"
              height="80"
            />
            </a>
            <div className="playlist-info">
            <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <p className="playlist-name">{playlist.name}</p>
            </a>
            <p>{playlist.description}</p>
            <p>Total Tracks: {playlist.tracks.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayLists;
