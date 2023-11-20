import "../MusicCard.css";
function AppleMusic() {
    return (<div className="card">
      <iframe
        id="embedPlayer"
        src="https://embed.music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
        height="450px"
        frameBorder={0}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allow="autoplay *; encrypted-media *; clipboard-write"
        style={{
          width: '100%',
          maxWidth: '660px',
          overflow: 'hidden',
          borderRadius: '10px',
          transform: 'translateZ(0px)',
          animation: '2s ease 0s 6 normal none running loading-indicator',
          backgroundColor: 'rgb(228, 228, 228)',
        }}
      ></iframe>
      </div>
    );
  }
  
  export default AppleMusic;
  