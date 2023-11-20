import React from 'react';

function SoundCloud() {
  return (
    <div style={styles.container}>
      <iframe
        title="SoundCloud Playlist"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1385103109&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        style={styles.iframe}
      ></iframe>
      <div style={styles.info}>
        <a
          href="https://soundcloud.com/this_is_lofi"
          title="THIS IS LOFI"
          target="_blank"
          style={styles.artistLink}
        >
          THIS IS LOFI
        </a>{' '}
        ·{' '}
        <a
          href="https://soundcloud.com/this_is_lofi/sets/january-relax-lofi-mix"
          title="2 HOUR NO COPYRIGHT LOFI MUSIC / BACKGROUND / CHILLHOP LOFI GAME BEATS😎"
          target="_blank"
          style={styles.trackLink}
        >
          2 HOUR NO COPYRIGHT LOFI MUSIC
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  iframe: {
    borderRadius: '8px 8px 0 0',
  },
  info: {
    padding: '15px',
    backgroundColor: '#f8f8f8',
  },
  artistLink: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    marginRight: '5px',
  },
  trackLink: {
    color: '#555',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default SoundCloud;
