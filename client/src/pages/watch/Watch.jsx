import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location=useLocation()
  console.log(location)
  const movies=location.state.movie

  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        src={movies.video}
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}
