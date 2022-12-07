import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWatch from './stopwatch';
import Stopwatch from './hook-stopwatch';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<>
<Stopwatch />
<StopWatch />
</>);
