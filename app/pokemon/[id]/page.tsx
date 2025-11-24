import { getPokemonById } from "@/services/pokemon";
import { stat } from "fs";
import { type } from "os";

//Define interface for the params
interface Props {
  params: Promise<{ id: string }>;
}

const typeColors = {
  fire: "bg-red-500 shadow-red-500/50",
  water: "bg-blue-500 shadow-blue-500/50",
  grass: "bg-green-500 shadow-green-500/50",
  electric: "bg-yellow-500 shadow-yellow-500/50",
  ice: "bg-blue-500 shadow-blue-500/50",
  fighting: "bg-red-500 shadow-red-500/50",
  poison: "bg-purple-500 shadow-purple-500/50",
  ground: "bg-brown-500 shadow-brown-500/50",
  flying: "bg-blue-500 shadow-blue-500/50",
  psychic: "bg-purple-500 shadow-purple-500/50",
  bug: "bg-green-500 shadow-green-500/50",
  rock: "bg-brown-500 shadow-brown-500/50",
  ghost: "bg-purple-500 shadow-purple-500/50",
  dragon: "bg-blue-500 shadow-blue-500/50",
  steel: "bg-gray-500 shadow-gray-500/50",
  fairy: "bg-pink-500 shadow-pink-500/50",
};

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemonById(id);
  const imageHD = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className="max-w-sm mx-auto p-2 border-yellow-300 border-10 rounded-lg shadow-lg">
      {/*Name and HP*/}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-left capitalize">
          {pokemon.name}
        </h1>
        <h2 className="text-right font-bold">{pokemon.stats[0].base_stat}</h2>
        {/*Type Icon*/}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`icons/${pokemon.types[0].type.name}.svg`}
          alt={pokemon.types[0].type.name}
          className="w-6 h-6"
        />
      </div>
      {/*Central Image*/}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageHD}
        alt={pokemon.name}
        className="w-48 h-48 object-contain"
      />
      {/*Attacks*/}
      <div className="">
        <h2 className="text-2xl font-bold text-left capitalize">Ataques</h2>
        <div className="flex flex-col gap-2">
          {pokemon.moves.slice(0, 2).map((move) => (
            <div key={move.move.name} className="flex items-center gap-2">
              <p className="text-left capitalize">{move.move.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

// lo que tiene que incluir en el pokemon Imagen Grande: La estrella del show.
// Daño del ataque y tipo del ataque.
//Barra en el fondo separado al bottom que ponga el numero de la serie tipo 25/96 y el simbolo de rare , normal, etc...
//Creado por Ruben
// Botón Volver: Para regresar a la lista.
