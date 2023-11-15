import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios"
import { useState,useEffect } from "react";


export default function Featured({ type,setGenre }) {
  const [content, setContent] = useState({})
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTU0N2MwMWFkM2M0NzYyNWNkMDY4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzY0ODg0MiwiZXhwIjoxNzI5MTg0ODQyfQ.cEewEpKHzPJrOHGK8AV38iCZr3LRBvQiVSjS0pSjx70",
            },
          }
        );
        setContent(res.data[0])
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent()
  }, [type]);
    return (
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre" onChange={(e)=> setGenre(e.target.value)}>
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        {/* <img
          src={content.imgTitle}
          alt=""
        /> */}
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          consectetur ab voluptates a omnis quia culpa quidem modi, quos unde,
          eum quasi, nesciunt cum minus quibusdam possimus. Magni, fuga
          veritatis!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}


