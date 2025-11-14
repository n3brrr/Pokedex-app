import React from "react";

async function name(name:string) {
   const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/25`)
   const datos = await respuesta.json

   return datos;
}