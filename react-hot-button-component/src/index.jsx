import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomButton from './hot-button';
import CustomButtonHook from './hook-hot-button';

const element = (
  <>
  <CustomButton />
  <CustomButtonHook />
  </>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
