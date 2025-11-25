import { Pokemon, PokemonListResponse } from "@/types/pokemon";

/**
 * Fetches detailed information for a specific Pokemon by its ID or name.
 * @param id - The unique identifier or name of the Pokemon.
 * @returns A Promise that resolves to the Pokemon data.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getPokemonById(id: number | string): Promise<Pokemon> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data: Pokemon = await response.json();

    return data;
  } catch (error) {
    console.error("Could not find data: ", error);
    throw error;
  }
}

/**
 * Fetches a list of Pokemon with a specified limit.
 * @param limit - The maximum number of Pokemon to retrieve.
 * @returns A Promise that resolves to the list of Pokemon.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getPokemonList(
  limit: number
): Promise<PokemonListResponse> {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const data: PokemonListResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Could not find the list: ", error);
    throw error;
  }
}

/**
 * Fetches detailed information for a specific Pokemon move by its name.
 * @param url - The URL of the move to retrieve.
 * @returns A Promise that resolves to the move data.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getMovesDetails(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Could not find move damage: ", error);
    throw error;
  }
}
