import React from 'react';
import ReactDOM from 'react-dom/client';
import HookAccordion from './hook-accordion';

const accordionItems = [
  {
    title: 'Super Mario 64',
    details: 'Super Mario 64 is a 1996 platform game for the Nintendo 64. It is the first Super Mario game to feature 3D gameplay, combining traditional Super Mario gameplay, visual style, and characters in a large open world.'
  },
  {
    title: 'Super Mario Sunshine',
    details: 'Super Mario Sunshine is the second 3D Super Mario game. It was released in 2002 for the GameCube. In it, Mario and Peach travel to Isle Delfino for a vacation when a Mario doppelgänger, going by the name of Shadow Mario, appears and vandalizes the entire island.'
  },
  {
    title: 'Super Mario Galaxy',
    details: ' It is the third 3D game in the Super Mario series. As Mario, the player embarks on a quest to rescue Princess Peach, save the universe from Bowser, and collect 120 Power Stars, after which the player can play the game as Luigi for a harder experience.'
  },
  {
    title: 'Super Mario Odyssey',
    details: "An entry in the Super Mario series, it follows Mario and his new ally Cappy—a sentient hat that allows Mario to control other characters and objects—as they journey across various kingdoms to save Princess Peach from his nemesis Bowser's plans of forced marriage."
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HookAccordion accordionItems={accordionItems} />);
