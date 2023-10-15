import React from 'react';

export default function ArtistName({ artists }) {
  // Use .map() to iterate through the 'artists' array and join the artist names with a comma
  const artistNames = artists.map((artist) => artist.name).join(', ');

  return (
    <div className="artist-names">
      {artistNames}
    </div>
  );
}