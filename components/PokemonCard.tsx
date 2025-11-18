
interface Props {
  name: string;
  url: string;
}

//The cards of pokemons
export default function PokemonCard({ name, url }: Props) {
  //Extract the id from URL
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];
  //Build the Img URL
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  //Capitalice Names
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow bg-white">
      <img src={imageUrl} alt={name} className="w-full h-48 object-contain" />
      <div className="text-center mt-2">
        <p className="text-gray-500 text-sm">#{id.padStart(3, "0")}</p>
        <p className="text-gray-500 text-sm">{capitalizedName}</p>
      </div>
    </div>
  );
}
