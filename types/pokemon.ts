//Importamos los datos de la API

//La lista con los Pokemons
export interface PokemonListItem {
  name: string;
  url: string;
}

//Cuantos pokemons queremos importar
export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}

//Los atributos de los pokemons
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
