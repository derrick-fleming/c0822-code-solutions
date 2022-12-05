import React, { useState } from 'react';

export default function CustomButtonHook() {
  const [clicks, setClicks] = useState(0);
  let buttonClass;
  if (clicks >= 3) buttonClass = 'three-clicks';
  if (clicks >= 6) buttonClass = 'six-clicks';
  if (clicks >= 9) buttonClass = 'nine-clicks';
  if (clicks >= 12) buttonClass = 'twelve-clicks';
  if (clicks >= 15) buttonClass = 'fifteen-clicks';
  if (clicks >= 18) buttonClass = 'eighteen-clicks';

  return (
    <button className={buttonClass} onClick={() => setClicks(clicks + 1)}>Hot Button</button>
  );
}
