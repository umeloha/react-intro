import React, { useState } from "react";

const ArtistCard = () => {
  const [artistName, setArtistName] = useState("Robyn Rihanna Fenty");
  const [albumsReleased, setAlbumsReleased] = useState(8);

  const increaseAlbumCount = () => setAlbumsReleased(albumsReleased + 1);

  return (
    <div>
      <h2>{artistName}</h2>
      <h3>Musician, Fashion Designer & Businesswoman</h3>
      <h3>Born in St.Michael, Barbados</h3>
      <h3>Albums Released: {albumsReleased}</h3>
      <button onClick={increaseAlbumCount}>
        She has released another one!
      </button>

      <h4>A Star Is Born</h4>
      <p>
        <strong>Rihanna</strong> was discovered by American record producer Evan
        Rogers who invited her to the United States to record demo tapes. After
        signing with Def Jam in 2005, she soon gained recognition with the
        release of her first two studio albums. The chart-topping single
        "Umbrella" earned Rihanna her first Grammy Award and catapulted her to
        global stardom. She continued to mix pop, dance, and R&B genres on her
        next studio albums.{" "}
      </p>
      <h4>Businesswoman and Fashion Icon</h4>
      <p>
        Aside from music, Rihanna is known for her involvement in humanitarian
        causes, entrepreneurial ventures, and the fashion industry. She is the
        founder of the nonprofit organisation Clara Lionel Foundation, cosmetics
        brand Fenty Beauty, and fashion house Fenty under LVMH; she is the first
        black woman to head a luxury brand for LVMH.[6] Rihanna has also
        ventured into acting, appearing in major roles
      </p>
    </div>
  );
};

export default ArtistCard;
