import React from 'react';
import AudioPlayer from './AudioPlayer';
import styles from './Music.module.css';

const Music = () => {
  return (
    <div className={styles.music}>
      <h1 className={styles.title}>Song Euro 2024</h1>
      <p className={styles.description}>Enjoy your favorite music below.</p>
      <img src="onerepublic.jpg" alt="music" className={styles.image} />
      <div className={styles.playerContainer}>
        <AudioPlayer src="/meduza_feat_onerepublic__leony_-_fire_official_uefa_euro_2024_song_(z3.fm).mp3" />
      </div>
      
    </div>
  );
};

export default Music;

