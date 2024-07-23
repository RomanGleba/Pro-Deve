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
      <h1 className={styles.title}>I Dont Wanna Wait</h1>
      <p className={styles.description}>Enjoy your favorite music below.</p>
      <img src="I Dont Wanna.jpeg" alt="music" className={styles.image} />
      <div className={styles.playerContainer}>
        <AudioPlayer src="/hiti_2024_-_david_guetta__onerepublic_-_i_dont_wanna_wait_(z3.fm).mp3" />
      </div>
      <h1 className={styles.title}>Angels Morandi Love is the Answer</h1>
      <p className={styles.description}>Enjoy your favorite music below.</p>
      <img src="Angels Morandi Love.jpeg" alt="music" className={styles.image} />
      <div className={styles.playerContainer}>
        <AudioPlayer src="morandi_-_angels_(z3.fm).mp3" />
      </div>
    </div>
  );
};

export default Music;

