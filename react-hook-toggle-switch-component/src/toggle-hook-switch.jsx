import React, { useState } from 'react';

const ToggleSwitchHook = function () {
  const [toggle, setToggle] = useState(false);

  const divClass = toggle
    ? 'toggle on'
    : 'toggle off';

  const buttonText = toggle
    ? 'ON'
    : 'OFF';

  function handleClick() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <div>
      <div className={divClass}>
        <button className="switch" onClick={handleClick}></button>
      </div>
      <h2 className="inline">{buttonText}</h2>
    </div>
  );
};

export default ToggleSwitchHook;
