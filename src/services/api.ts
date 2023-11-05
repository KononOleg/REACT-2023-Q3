import { Result } from '../types';

const url = `https://pokeapi.co/api/v2/`;

export const getPokemons = async () => {
  try {
    const response = await fetch(`${url}pokemon?limit=12&offset=0`);
    const results = await response.json();
    return {
      count: results.count,
      results: results.results.map(({ name, url }: Result) => {
        const splitArray = url.split('/');
        const id = splitArray[splitArray.length - 2];

        return {
          id,
          name: name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      }),
    };
  } catch {
    return {
      count: 0,
      results: [],
    };
  }
};

export const searchPokemon = async (q: string) => {
  try {
    const response = await fetch(`${url}pokemon-species/${q}`);
    const result = await response.json();

    const { id, name } = result;
    return {
      count: 1,
      results: [
        {
          id,
          name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        },
      ],
    };
  } catch {
    return {
      count: 0,
      results: [],
    };
  }
};
