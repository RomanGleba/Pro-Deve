import React, { useState, useRef, useEffect } from 'react';
import ReactHowler from 'react-howler';
import styles from './AudioPlayer.module.css';

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false); // Стан, який зберігає інформацію про те, чи аудіо відтворюється
  const [volume, setVolume] = useState(1.0); // Стан для гучності аудіо
  const [loaded, setLoaded] = useState(false); // Стан для відстеження завантаження аудіо
  const [seek, setSeek] = useState(0); // Стан для відстеження поточної позиції відтворення аудіо
  const [duration, setDuration] = useState(0); // Стан для збереження тривалості аудіо

  const playerRef = useRef(null); // Референс до компонента ReactHowler для керування аудіо

  // Обробник події завантаження аудіо
  const handleLoad = () => {
    setLoaded(true); // Встановлюємо стан завантаження аудіо як true
    setDuration(playerRef.current.duration()); // Встановлюємо тривалість аудіо
  };

  // Обробник події завершення відтворення аудіо
  const handleEnd = () => {
    playerRef.current.seek(0); // Повертаємо позицію до початку в аудіоплеєрі
    setSeek(0); // Повертаємо позицію до початку
    setPlaying(true); // Відновлюємо відтворення
  };

  // Обробник зміни позиції відтворення
  const handleSeekChange = (e) => {
    const newSeek = parseFloat(e.target.value); // Отримуємо нове значення позиції відтворення
    setSeek(newSeek); // Оновлюємо стан позиції відтворення
    playerRef.current.seek(newSeek); // Змінюємо позицію відтворення в аудіоплеєрі
  };

  // Використовуємо useEffect для відстеження зміни стану відтворення та оновлення позиції
  useEffect(() => {
    let interval;
    if (playing) {
      // Оновлюємо позицію відтворення кожну секунду, якщо аудіо відтворюється
      interval = setInterval(() => {
        setSeek(playerRef.current.seek());
      }, 1000);
    } else if (!playing && seek !== 0) {
      // Очищаємо інтервал, якщо аудіо не відтворюється
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Очищаємо інтервал при розмонтуванні компонента
  }, [playing, seek]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

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
        {playing ? 'Pause' : 'Play'} {/* Відображаємо текст кнопки в залежності від стану відтворення */}
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
          onChange={(e) => setVolume(parseFloat(e.target.value))} // Оновлюємо стан гучності
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
          onChange={handleSeekChange} // Оновлюємо позицію відтворення
        />
      </div>
      <div className={styles.status}>
        {loaded ? "Audio Loaded" : "Loading..."} {/* Відображаємо статус завантаження аудіо */}
      </div>
      <div className={styles.time}>
        {formatTime(seek)} / {formatTime(duration)} {/* Відображаємо поточний час і тривалість */}
      </div>
    </div>
  );
};

export default AudioPlayer;
