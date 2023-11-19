import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiResponse, PokemonResponse, Result } from '../types';

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: ({ pageSize, currentPage, searchValue }) =>
        searchValue
          ? `pokemon-species/${searchValue}`
          : `pokemon?limit=${pageSize}&offset=${currentPage - 1}`,

      transformResponse: (response: ApiResponse) => {
        if (!response.count) {
          const { id, name } = response;
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
        } else {
          const { count, results } = response;

          return {
            count: count,
            results: results.map(({ name, url }: Result) => {
              const splitArray = url.split('/');
              const id = splitArray[splitArray.length - 2];

              return {
                id,
                name: name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
              };
            }),
          };
        }
      },
    }),

    getPokemon: builder.query({
      query: (id) => `pokemon/${id}`,
      transformResponse: (response: PokemonResponse) => {
        const { height, name, weight, stats } = response;
        return {
          height,
          name,
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
      },
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi;
