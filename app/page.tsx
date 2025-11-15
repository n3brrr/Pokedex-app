import { getPokemonList, getPokemonById } from "@/services/pokemon";
import PokemonCard from "@/components/PokemonCard";

export default async function Home() {
  // Probar función 1: Obtener lista
  const lista = await getPokemonList(10);
  console.log("📋 Lista de 10 pokémon:", lista);
  // Probar función 2: Obtener Pikachu
  const pikachu = await getPokemonById(25);
  console.log("⚡ Pikachu:", pikachu);

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      {lista.results.map((pokemon) => (
        <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
