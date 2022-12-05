import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let timer;
    if (!play) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }

  });

  const iconClass = play
    ? 'play'
    : 'pause';

  return (
    <div className='container'>
      <div className='watch-face'>
        <h1>{count}</h1>
      </div>
      <div className='container'>
        <button onClick={() => {
          if (!play) {
            setPlay(true);
          } else {
            setPlay(false);
          }
        }}
          className='playButton'>
          <i className={`fa-solid fa-${iconClass}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
