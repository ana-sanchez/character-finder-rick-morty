const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const fetchCharacter = () => fetch(ENDPOINT).then(response => response.json());

export { fetchCharacter }


// https://rickandmortyapi.com/api/character/

// https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json