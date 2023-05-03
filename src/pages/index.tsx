import PokemonCard from "@/components/PokemonCard";
import api from "@/services/api";
import Head from "next/head";
import { useEffect, useState } from "react";

interface IPokemons {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemons[]>([])
  useEffect(() => {
    handleListPokemon()
  }, [])

  const handleListPokemon = async () => {
    const result = await api.get('/pokemon')
    setPokemons(result.data.results)
  }

  return (
   <div>
    <Head>
      <title>Starter Next</title>
    </Head>
    <main>
      {pokemons.map(pokemon => (
        <PokemonCard 
          name={pokemon.name}
        />
      ))}
    </main>
   </div>
  )
}
