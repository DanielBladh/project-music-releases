import React from 'react'

export default function PlaylistItem( {playlist} ) {
  return (
    <div className="playlist-item">
    <img src={playlist.images[0].url} alt={playlist.name} />
    <h3>{playlist.name}</h3>
    <p>{playlist.description}</p>
    {/* Add more information as needed */}
  </div>
  )
}
