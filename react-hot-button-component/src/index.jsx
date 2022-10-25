import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomButton from './hot-button';

const element = (
  <CustomButton />
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
