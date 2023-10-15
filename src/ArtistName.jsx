import React from 'react';

export default function ArtistName({ artists }) {
  return (
    <div className="artist-names">
      {artists.map((artist, index) => (
        <a
          key={index}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {artist.name}
        </a>
      ))}
    </div>
  );
}