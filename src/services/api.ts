import { Result } from '../types';

const url = `https://pokeapi.co/api/v2/`;

export const getPokemons = async (pageSize: number, currentPage: number) => {
  try {
    const response = await fetch(
      `${url}pokemon?limit=${pageSize}&offset=${currentPage - 1}`
    );
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

export const getPokemon = async (id: string) => {
  try {
    const response = await fetch(`${url}pokemon/${id}`);
    const { height, name, weight, stats } = await response.json();
    return {
      height,
      name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      weight,
      stats: [
        stats[0].base_stat,
        stats[1].base_stat,
        stats[2].base_stat,
        stats[3].base_stat,
        stats[4].base_stat,
        stats[5].base_stat,
      ],
    };
  } catch {
    return;
  }
};
