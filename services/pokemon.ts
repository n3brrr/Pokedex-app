import { Pokemon, PokemonListItem, PokemonListResponse } from "@/types/pokemon";

export async function getPokemonById(id:number | string): Promise<Pokemon>{
   try{
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   if(!respuesta.ok){
      throw new Error (`Error HTTP: ${respuesta.status}`);
   }
      const datos: Pokemon = await respuesta.json()   
  
   return datos
   }
   catch (error) {
      console.error("No se ha podido encontrar los datos: ", error)
      throw error
   }
} 

export async function getPokemonList(limit:number): Promise<PokemonListResponse> {
   try{
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
   
   if (!respuesta.ok){
      throw new Error(`Error HTTP: ${respuesta.status}`)
   }
      const datos: PokemonListResponse = await respuesta.json()
      return datos
   }
   catch (error){
      console.error("No se ha podido encontrar la lista: ", error)
      throw error
   }
}