// VideoBackground.js
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../style/video.css';
import Button from '../components/Button';
import sky from "../asets/video/sky.mp4"
import ocean from "../asets/video/ocean.mp4"
import lake from "../asets/video/lake.mp4"
import city from "../asets/video/city.mp4"
const videos = {
  video1: ocean,
  video2: lake,
  video3: sky,
};

const VideoBackground = () => {
  const [selectedVideo, setSelectedVideo] = useState('video1');

  const handleChangeVideo = (videoName) => {
    setSelectedVideo(videoName);
  };

  return (
    <div className="video-background">
      <video autoPlay loop muted key={selectedVideo}>
        <source src={videos[selectedVideo]} type="video/mp4" />
      </video>
      <div className="buttons-container">
        {Object.keys(videos).map((videoName) => (
          <Button
            key={videoName}
            text={`Video ${videoName.charAt(videoName.length - 1)}`}
            onClick={() => handleChangeVideo(videoName)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoBackground;