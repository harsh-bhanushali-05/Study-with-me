import { useEffect, useState } from "react";
import AppleMusic from "./AppleMusic";
import Spotify from "./Spotify";
import SoundCloud from "./SoundCloud";
import "../MusicCard.css";

function Music() {
  const [musicProvider, setMusicProvider] = useState("Apple");

  useEffect(() => {
    // You can perform any additional actions when the music provider changes
  }, [musicProvider]);
  function spo(str) {
    setMusicProvider(str);
  }

  const renderMusicProvider = () => {
    switch (musicProvider) {
      case "Apple":
        return <AppleMusic />;
      case "Spotify":
        return <Spotify />;
      case "SoundCloud":
        return <SoundCloud />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="card">
        {renderMusicProvider()}
      </div>
      <i onClick={() => spo("Apple")} className="fa-brands fa-apple"></i>
      <i onClick={() => spo("Spotify")} className="fa-brands fa-spotify"></i>
      <i onClick={() => spo("SoundCloud")} className="fa-brands fa-soundcloud"></i>
    </div>
  );
}

export default Music;
