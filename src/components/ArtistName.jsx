import React from 'react';

export default function ArtistName({ artists }) {
  return (
    <div className="artist-names">
      {artists.map((artist, index) => (
        <span key={index}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
          {index < artists.length - 2 ? ', ' : index === artists.length - 2 ? ' & ' : ''}
        </span>
      ))}
    </div>
  );
}