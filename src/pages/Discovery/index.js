import React, { useState } from "react";

const Discovery = () => {
  const [album, setAlbum] = useState([
    {
      title: "Music of the Sun",
      img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Rihanna_-_Music_of_the_Sun.png",
      rating: "★★★★",
    },
    {
      title: "A Girl like Me",
      img: "https://upload.wikimedia.org/wikipedia/en/6/61/A_Girl_like_Me_-_Rihanna.png",
      rating: "★★★★",
    },
    {
      title: "Good Girl Gone Bad",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Good_Girl_Gone_Bad.png",
      rating: "★★★★",
    },
    {
      title: "Rated R",
      img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Rihanna_-_Rated_R.png",
      rating: "★★★★",
    },
    {
      title: "Loud",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png",
      rating: "★★★★",
    },
    {
      title: "Talk That Talk",
      img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Rihanna_-_Talk_That_Talk_%28standard%29.png",
      rating: "★★★★",
    },
    {
      title: "Unapologetic",
      img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Unapologetic_-_Rihanna.png",
      rating: "★★★★",
    },
    {
      title: "Anti",
      img: "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
      rating: "★★★★",
    },
  ]);

  const renderRows = () => {
    return album.map((a) => (
      <tr>
        <td
          style={{
            fontSize: "25px",
            width: "75vw",
            textAlign: "center",
            padding: "0px",
          }}
        >
          {a.title}
        </td>
        <td>
          <img style={{ border: "5px solid salmon" }} src={a.img} />
        </td>
        <td style={{ padding: "20px" }}>{a.rating}</td>
      </tr>
    ));
  };

  return (
    <table
      style={{
        border: "2px solid black",
        width: "80vw",
        textAlign: "center",
        padding: "15px",
      }}
    >
      <thead>
        <tr style={{ fontSize: "25px" }}>
          <th>Album</th>
          <th>Cover</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Discovery;
