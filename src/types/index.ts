export type Pokemon = {
  id: string;
  name: string;
  image: string;
};

export type Result = {
  name: string;
  url: string;
};

export type PokemonDetail = {
  height: string;
  name: string;
  image: string;
  weight: string;
  stats: string[];
};

export type PokemonsResponse = {
  count: number;
  results: Result[];
};

export type PokemonResponse = {
  id: string;
  height: string;
  name: string;
  weight: string;
  stats: Stat[];
};
export type Stat = {
  base_stat: string;
};

export type ApiResponse = PokemonResponse & PokemonsResponse;
