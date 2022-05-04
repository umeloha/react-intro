import React, { useState } from "react";

const ArtistCard = () => {
  const [artistName, setArtistName] = useState("Rihanna");
  const [albumsReleased, setAlbumsReleased] = useState(8);

  const increaseAlbumCount = () => setAlbumsReleased(albumsReleased + 1);

  return (
    <div>
      <h2>{artistName}</h2>
      <h3>Musician</h3>
      <h3>from Barbados</h3>
      <h3>Albums Released: {albumsReleased}</h3>
      <button onClick={increaseAlbumCount}>
        She has released another one!
      </button>
    </div>
  );
};

export default ArtistCard;
