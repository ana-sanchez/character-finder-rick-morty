const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const fetchCharacter = () => fetch(ENDPOINT).then(response => response.json());

export { fetchCharacter }