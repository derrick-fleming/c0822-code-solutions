import React from 'react';
import ReactDOM from 'react-dom/client';
import HookDrawer from './hook-drawer';

const menuItems = ['Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy', 'Super Mario Odyssey'];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HookDrawer items={menuItems} />);
