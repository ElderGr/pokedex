import PokemonCard from "@/components/PokemonCard";
import api from "@/services/api";
import Head from "next/head";
import { useEffect, useState } from "react";

interface IPokemons {
  name: string;
  url: string;
}

export default function Home() {
  const [paginationConfig, setPaginationConfig] = useState({
    offset: 1,
    limit: 5
  })

  const [pokemons, setPokemons] = useState<IPokemons[]>([])
  useEffect(() => {
    handleListPokemon()
  }, [paginationConfig.offset])

  const handleListPokemon = async () => {
    const result = await api.get(`/pokemon?offset=${paginationConfig.offset}&limit=${paginationConfig.limit}`)
    setPokemons(result.data.results)
  }

  const handleNextPage = () => {
    setPaginationConfig({
      ...paginationConfig,
      offset: paginationConfig.offset + 5
    })
  }

  const handlePrevPage = () => {
    setPaginationConfig({
      ...paginationConfig,
      offset: paginationConfig.offset - 5
    })
  }

  return (
   <div>
    <Head>
      <title>Pokedex | NextJs</title>
    </Head>
    <main>
      <div className="flex flex-wrap">
        {pokemons.map(pokemon => (
          <PokemonCard 
            name={pokemon.name}
          />
        ))}
      </div>
      <div>
        <button 
          disabled={paginationConfig.offset <= 5}
          onClick={handlePrevPage}>
            Anterior
        </button>
        <button 
          onClick={handleNextPage}
        >
          Próximo
        </button>
      </div>
    </main>
   </div>
  )
}
