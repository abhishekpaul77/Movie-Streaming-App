import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}
