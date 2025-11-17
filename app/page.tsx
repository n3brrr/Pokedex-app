import { getPokemonList, getPokemonById } from "@/services/pokemon";
import PokemonCard from "@/components/PokemonCard";

export default async function Home() {
  const lista = await getPokemonList(10);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 m-5">
      {lista.results.map((pokemon) => (
        <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
