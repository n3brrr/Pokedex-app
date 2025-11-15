import { getPokemonList, getPokemonById } from '@/services/pokemon'

export default async function Home() {
  // Probar función 1: Obtener lista
  const lista = await getPokemonList(10)
  console.log('📋 Lista de 10 pokémon:', lista)
  
  // Probar función 2: Obtener Pikachu
  const pikachu = await getPokemonById(25)
  console.log('⚡ Pikachu:', pikachu)
  
  return (
       <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1 className="text-4xl font-bold">Pokédex App</h1>
      <p className="text-gray-600">Abre la consola del navegador (F12)</p>
      <div className="bg-gray-100 p-4 rounded">
        <p>Total pokémon: {lista.count}</p>
        <p>Primero de la lista: {lista.results[0].name}</p>
        <p>Pikachu ID: {pikachu.id}</p>
        <p>Pikachu tipo: {pikachu.types[0].type.name}</p>
      </div>
    </div>

   
  )
}
