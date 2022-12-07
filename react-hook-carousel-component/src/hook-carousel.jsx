import React, { useState, useEffect } from 'react';

export default function CarouselHook(props) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => nextImage(), 3000);
    return () => clearInterval(interval);
  });

  function previousImage() {
    setPhotoIndex(prev => (((prev - 1) + props.images.length) % props.images.length));
  }

  function nextImage() {
    setPhotoIndex(prev => ((prev + 1) % props.images.length));
  }

  function setImage(event) {
    const index = Number(event.target.dataset.id);
    setPhotoIndex(index);
  }

  return (
    <>
      <div className="row">
        <div>
          <button>
            <span onClick={previousImage} className="fa-solid fa-chevron-left" data-id="left"></span>
          </button>
        </div>
        <ul className="window">
          {
            props.images.map((image, index) => {
              const listClass = index === photoIndex ? '' : 'hidden';
              return (
                <li key={index} className={listClass}>
                  <img src={image.src}></img>
                </li>
              );
            })
          }
        </ul>
        <div>
          <button>
            <span onClick={nextImage} className="fa-solid fa-chevron-right" data-id="right"></span>
          </button>
        </div>
      </div>
      <div className="row">
        <ul>
          {
            props.images.map((image, index) => {
              const circleClass = index === photoIndex
                ? 'solid'
                : 'regular';
              return (
                <li key={index} className="dot" onClick={setImage}>
                  <span className={`fa-${circleClass} fa-circle`} data-id={index}></span>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
}
