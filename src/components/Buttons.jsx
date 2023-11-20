import React, { useState } from 'react';
import '../Buttons.css';

function Buttons(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    props.isCounting((prev)=> !prev);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex3">
      <i
        className={`button ${isPlaying ? 'active' : ''}`}
        onClick={handlePlayPauseClick}
      >
        <i className="fa-solid fa-play"></i>
      </i>
      <i
        className={`button ${isPlaying ? '' : 'active'}`}
        onClick={handlePlayPauseClick}
      >
        <i className="fa-solid fa-pause"></i>
      </i>
    </div>
  );
}

export default Buttons;
