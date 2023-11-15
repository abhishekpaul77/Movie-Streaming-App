import React from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios"
import { Link} from "react-router-dom";

export default function ListItem({index,item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "/movies/find/" + item,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTU0N2MwMWFkM2M0NzYyNWNkMDY4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzY0ODg0MiwiZXhwIjoxNzI5MTg0ODQyfQ.cEewEpKHzPJrOHGK8AV38iCZr3LRBvQiVSjS0pSjx70",
            },
          }
        );
        setMovie(res.data); // Ensure that 'res.data' contains the expected movie data
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  
 console.log(movie)
  return (
    <Link to="/watch" state={{ movie: movie }} >
    <div className="listItem" 
    style={{left:isHovered && index * 225-50 + index*2.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >

      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
      <>
      <video src={movie.trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownAltOutlined className="icon" />
        </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
            {movie.desc}
          </div>
          <div className="genre">
            {movie.genre}
          </div>
      </div>
      </>
      )}
    </div>
    </Link>
  );
}
