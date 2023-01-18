async function placeHolder(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}

placeHolder('https://jsonplaceholder.typicode.com/users');

async function pokeFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

pokeFetch('https://pokeapi.co/api/v2/pokemon/151');
