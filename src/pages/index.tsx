import PokemonCard from "@/components/PokemonCard";
import PokemonService from "@/services/pokemon/pokemon.service";
import { IListPokemonsResult } from "@/services/pokemon/pokemon.types";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function Home() {
  const pokemonService = new PokemonService()
  
  const [paginationConfig, setPaginationConfig] = useState({
    offset: 1,
    limit: 5
  })

  const [pokemons, setPokemons] = useState<IListPokemonsResult>({} as IListPokemonsResult)
  useEffect(() => {
    handleListPokemon()
  }, [paginationConfig.offset])

  const handleListPokemon = async () => {
    const { data } = await pokemonService.list({
      limit: paginationConfig.limit,
      offset: paginationConfig.offset
    })

    setPokemons(data)
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
        {pokemons.results.map(pokemon => (
          <PokemonCard 
            name={pokemon.name}
          />
        ))}
      </div>
      <div>
        <button 
          disabled={pokemons.previous === null}
          onClick={handlePrevPage}>
            Anterior
        </button>
        <button
          disabled={pokemons.next === null}
          onClick={handleNextPage}
        >
          Próximo
        </button>
      </div>
    </main>
   </div>
  )
}
