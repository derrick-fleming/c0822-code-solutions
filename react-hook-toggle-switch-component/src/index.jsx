import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch';
import ToggleSwitchHook from './toggle-hook-switch';

const container = ReactDOM.createRoot(document.querySelector('#root'));
container.render(
  <>
    <ToggleSwitch label="Toggle Switch" />
    <ToggleSwitchHook />
  </>);
