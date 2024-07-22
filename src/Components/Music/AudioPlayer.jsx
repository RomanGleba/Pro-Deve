import React, { useState, useEffect, useRef } from 'react';
import ReactHowler from 'react-howler';
import styles from './Music.module.css';

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [loaded, setLoaded] = useState(false);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);

  const playerRef = useRef(null);

  const handleLoad = () => {
    setLoaded(true);
    setDuration(playerRef.current.duration());
  };

  const handleEnd = () => {
    setPlaying(false);
  };

  const handleSeekChange = (e) => {
    const newSeek = parseFloat(e.target.value);
    setSeek(newSeek);
    playerRef.current.seek(newSeek);
  };

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        setSeek(playerRef.current.seek());
      }, 1000);
    } else if (!playing && seek !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playing, seek]);

  return (
    <div className={styles.audioPlayer}>
      <ReactHowler
        src={src}
        playing={playing}
        volume={volume}
        onLoad={handleLoad}
        onEnd={handleEnd}
        ref={playerRef}
      />
      <button className={styles.playPauseButton} onClick={() => setPlaying(!playing)}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <div className={styles.control}>
        <label htmlFor="volume">Volume: </label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="seek">Seek: </label>
        <input
          type="range"
          id="seek"
          name="seek"
          min="0"
          max={duration}
          step="0.1"
          value={seek}
          onChange={handleSeekChange}
        />
      </div>
      <div className={styles.status}>
        {loaded ? "Audio Loaded" : "Loading..."}
      </div>
    </div>
  );
};

export default AudioPlayer;


      
