import React, { useState } from "react";

const Discovery = () => {
  const [album, setAlbum] = useState([
    {
      title: "Music of the Sun",
      img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Rihanna_-_Music_of_the_Sun.png",
    },
    {
      title: "A Girl like Me",
      img: "https://upload.wikimedia.org/wikipedia/en/6/61/A_Girl_like_Me_-_Rihanna.png",
    },
    {
      title: "Good Girl Gone Bad",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Good_Girl_Gone_Bad.png",
    },
    {
      title: "Rated R",
      img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Rihanna_-_Rated_R.png",
    },
    {
      title: "Loud",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png",
    },
    {
      title: "Talk That Talk",
      img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Rihanna_-_Talk_That_Talk_%28standard%29.png",
    },
    {
      title: "Unapologetic",
      img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Unapologetic_-_Rihanna.png",
    },
    {
      title: "Anti",
      img: "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
    },
  ]);

  const renderRows = () => {
    return album.map((a) => (
      <tr>
        <td>{a.title}</td>
        <td>
          <img src={a.img} />
        </td>
      </tr>
    ));
  };

  return (
    <table
      style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Discovery;
