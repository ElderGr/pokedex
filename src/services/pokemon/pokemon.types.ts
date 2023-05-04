export interface IListPokemonParams {
    offset?: number;
    limit?: number;
}

export interface IListPokemonsResult {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[]
}

export interface IDetailPokemonParams {
    pokemonName: string;
}

export interface IPokemonDetail {
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    }
}