fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    console.error(err);
  });

fetch('https://pokeapi.co/api/v2/pokemon/151')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    console.error(err);
  });
