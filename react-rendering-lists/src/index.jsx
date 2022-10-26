import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.name}</li>;
}

function CreateList(props) {
  const listItem = pokedex.map(pokemon => <ListItem key={pokemon.number} name={pokemon.name}/>);
  return (
    <ul>
      {listItem}
    </ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CreateList />);
