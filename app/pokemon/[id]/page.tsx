import { getPokemonById, getMovesDetails } from "@/services/pokemon";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const typeColors: Record<string, string> = {
  fire: "bg-red-500 shadow-red-500/50",
  water: "bg-blue-500 shadow-blue-500/50",
  grass: "bg-green-500 shadow-green-500/50",
  electric: "bg-yellow-500 shadow-yellow-500/50",
  ice: "bg-cyan-400 shadow-cyan-400/50",
  fighting: "bg-orange-700 shadow-orange-700/50",
  poison: "bg-purple-600 shadow-purple-600/50",
  ground: "bg-yellow-700 shadow-yellow-700/50",
  flying: "bg-indigo-400 shadow-indigo-400/50",
  psychic: "bg-pink-600 shadow-pink-600/50",
  bug: "bg-lime-600 shadow-lime-600/50",
  rock: "bg-stone-500 shadow-stone-500/50",
  ghost: "bg-indigo-800 shadow-indigo-800/50",
  dragon: "bg-indigo-600 shadow-indigo-600/50",
  steel: "bg-gray-400 shadow-gray-400/50",
  fairy: "bg-pink-300 shadow-pink-300/50",
  normal: "bg-gray-400 shadow-gray-400/50",
};

export default async function PokemonPage({ params }: Props) {
  // 1. Get ID and Base Pokemon data
  const { id } = await params;
  const pokemon = await getPokemonById(id);
  const imageHD = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  const mainType = pokemon.types[0].type.name;
  const bgColor = typeColors[mainType] || "bg-gray-400";

  // 2. Get details for the first 2 attacks (in parallel for speed)
  // Use slice(0, 2) to get a maximum of 2 attacks
  const attacks = await Promise.all(
    pokemon.moves
      .slice(0, 2)
      .map((m: { move: { url: string } }) => getMovesDetails(m.move.url))
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* === POKEMON CARD === */}
      <div
        className={`w-full max-w-sm bg-white p-4 rounded-xl shadow-2xl border-8 border-yellow-400 relative overflow-hidden`}
      >
        {/* Header: Name, HP, and Type */}
        <div className="flex justify-between items-end mb-2">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold">
              Basic Pokémon
            </span>
            <h1 className="text-2xl font-bold capitalize leading-none">
              {pokemon.name}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-bold text-xl">
              {pokemon.stats[0].base_stat} HP
            </span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                typeColors[mainType] || "bg-gray-400"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/icons/${mainType}.svg`}
                alt={mainType}
                className="w-5 h-5 invert brightness-0"
              />
            </div>
          </div>
        </div>
        {/* Central Image with Color Background */}
        <div
          className={`w-full h-56 border-4 border-yellow-300 shadow-inner flex items-center justify-center bg-linear-gradient-to-br from-gray-100 to-gray-300 mb-4 relative`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageHD}
            alt={pokemon.name}
            className="w-48 h-48 object-contain drop-shadow-xl z-10"
          />
          {/* Subtle decorative background */}
          <div className={`absolute inset-0 opacity-10 ${bgColor}`}></div>
        </div>

        {/* Attack List */}
        <div className="space-y-3 mb-6">
          {attacks.map((attack, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-100 pb-1"
            >
              <div className="flex items-center gap-2">
                {/* Energy Cost Icon (Simulated with attack type) */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${
                    typeColors[attack.type.name] || "bg-gray-300"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/icons/${attack.type.name}.svg`}
                    alt={attack.type.name}
                    className="w-3 h-3 invert brightness-0"
                  />
                </div>
                <span className="font-bold capitalize text-gray-800">
                  {attack.name.replace("-", " ")}
                </span>
              </div>
              <span className="text-xl font-bold text-black">
                {attack.power || "10+"}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="border-t-2 border-gray-300 pt-4 mt-4 flex justify-between text-[10px] text-gray-400 font-bold">
          <span>Illu. Official Art</span>
          <span className="italic">©2025 Rubén Torres </span>
          <span>{pokemon.id}/151 ★</span>
        </div>
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-gray-800 text-white font-bold rounded-full shadow-lg hover:bg-black hover:scale-105 transition-all flex items-center gap-2"
      >
        <span>←</span> Back to Pokedex
      </Link>
    </div>
  );
}
