import { useEffect, useState } from "react";
import AppleMusic from "./AppleMusic";
import Spotify from "./Spotify";
import SoundCloud from "./SoundCloud";
import "../MusicCard.css";
function Music() {
  const [musicProvider, setMusicProvider] = useState("Spotify");

  useEffect(() => {
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
        <div className="render">{renderMusicProvider()}</div>
      </div>
      <div className="change">
      <i  onClick={() => spo("Apple")} className="icon fa-brands fa-apple"></i>
      <i  onClick={() => spo("Spotify")} className="icon fa-brands fa-spotify"></i>
      <i 
        onClick={() => spo("SoundCloud")}
        className="icon fa-brands fa-soundcloud"
      ></i>
      </div>
    </div>
  );
}

export default Music;
