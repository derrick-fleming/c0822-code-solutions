import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  function toggleStart() {
    if (play !== false) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }

  useEffect(() => {
    let interval = null;
    if (play) {
      interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [play]);

  function resetTimer() {
    if (!play) {
      setCount(0);
    }
  }

  const iconClass = play
    ? 'pause'
    : 'play';

  return (
    <div className='container'>
      <div className='watch-face' onClick={resetTimer}>
        <h1>{count}</h1>
      </div>
      <div className='container'>
        <button onClick={toggleStart}
          className='playButton'>
          <i className={`fa-solid fa-${iconClass}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
