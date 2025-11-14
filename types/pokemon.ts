export interface PokemonListItem{
    name: string;
    url: string;
}

export interface PokemonListResponse{
    count: number;
    results: PokemonListItem[];
}

export interface Pokemon{
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }>;
    stats: Array<{
        base_stat: number;
        star: {
            name: string; 
        };
    }>;
    height: number;
    weight: number;
}