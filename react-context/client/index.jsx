import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHook from './app-hook';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<AppHook />);
