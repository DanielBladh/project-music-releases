import React from "react";
import CoverImage from "./CoverImage";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import DotsIcon from "./DotsIcon";
import HeartIcon from "./HeartIcon";
import PlayIcon from "./PlayIcon";

export default function Album({ albumData }) {
  return (
    <div className="album">
      <div className="cover-image-wrapper">
        <CoverImage imageUrl={albumData.images[0].url} />
        <span className="albumIcons">
          <div className="icon-wrapper">
            <HeartIcon className="heart-button" />
          </div>
          <div className="icon-wrapper">
            <PlayIcon className="play-button" />
          </div>
          <div className="icon-wrapper">
            <DotsIcon className="dots-button" />
          </div>
        </span>
      </div>
      <div className="albumName">
        <AlbumName
          name={albumData.name}
          externalUrl={albumData.external_urls.spotify}
        />
      </div>
      <div className="artistName">
        <ArtistName artists={albumData.artists} />
      </div>
    </div>
  );
}
