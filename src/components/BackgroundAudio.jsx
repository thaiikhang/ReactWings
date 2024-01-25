import React from 'react';
import ReactPlayer from 'react-player';
import backgroundMusic from '../assets/toteti.mp3';

const BackgroundMusicPlayer = ({ playing }) => {
  return (
    <ReactPlayer
      url={backgroundMusic}
      playing={playing}
      volume={0.5}
      loop
      width="0"
      height="0"
    />
  );
};

export default BackgroundMusicPlayer;
