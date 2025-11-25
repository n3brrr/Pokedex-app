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

const cardGradients: Record<string, string> = {
  fire: "bg-gradient-to-b from-red-400 via-orange-400 to-red-400 ",
  water: "bg-gradient-to-b from-blue-300 via-blue-500 to-blue-500",
  grass: "bg-gradient-to-b from-green-300 via-green-500 to-green-500",
  electric: "bg-gradient-to-b from-yellow-300 via-yellow-300 to-yellow-400",
  ice: "bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-500",
  fighting: "bg-gradient-to-b from-orange-300 via-orange-500 to-orange-500",
  poison: "bg-gradient-to-b from-purple-300 via-purple-500 to-purple-500",
  ground: "bg-gradient-to-b from-brown-300 via-brown-500 to-brown-500",
  flying: "bg-gradient-to-b from-indigo-300 via-indigo-500 to-indigo-500",
  psychic: "bg-gradient-to-b from-pink-300 via-pink-500 to-pink-500",
  bug: "bg-gradient-to-b from-lime-300 via-lime-500 to-lime-500",
  rock: "bg-gradient-to-b from-stone-300 via-stone-500 to-stone-500",
  ghost: "bg-gradient-to-b from-violet-300 via-violet-500 to-violet-500",
  dragon: "bg-gradient-to-b from-indigo-300 via-indigo-500 to-indigo-500",
  steel: "bg-gradient-to-b from-gray-300 via-gray-500 to-gray-500",
  fairy: "bg-gradient-to-b from-pink-300 via-pink-500 to-pink-500",
  normal: "bg-gradient-to-b from-gray-400 via-gray-400 to-gray-500",
};

export default async function PokemonPage({ params }: Props) {
  // 1. Get ID and Base Pokemon data
  const { id } = await params;
  const pokemon = await getPokemonById(id);
  const imageHD = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  const mainType = pokemon.types[0].type.name;
  const bgColor = typeColors[mainType] || "bg-gray-400";
  const gradient = cardGradients[mainType] || "bg-white";

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
        className={`w-full max-w-sm ${gradient} p-4 rounded-xl shadow-2xl border-8 border-yellow-400 relative overflow-hidden`}
      >
        {/* Header: Name, HP, and Type */}
        <div className="flex justify-between items-end mb-2">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold capitalize leading-none">
              {pokemon.name}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="black font-bold text-xl">
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
        <div className="border-t-2 border-gray-300 pt-4 mt-4 flex justify-between text-[10px] text-black-400 font-bold">
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
