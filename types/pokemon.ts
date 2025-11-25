//Import API data

//The list with the Pokemons
export interface PokemonListItem {
  name: string;
  url: string;
}

//How many pokemons we want to import
export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}

//The attributes of the pokemons
export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  moves: Array<{
    move: {
      name: string;
      url: string;
      power: number;
      id: number;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  height: number;
  weight: number;
}
