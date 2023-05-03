import api from "@/services/api"
import { useEffect, useState } from "react"
import Image from 'next/image'

interface Props{
    name: string;
}

interface IPokemonDetail {
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    }
}

function PokemonCard({
    name
}: Props){
    const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail>({
        sprites: {
            front_default: null
        }
    } as IPokemonDetail)

    useEffect(() => {
        if(name){
            handlePokemonDetail()
        }
    }, [name])

    const handlePokemonDetail = async () => {
        const response = await api.get(`/pokemon/${name}`)
        setPokemonDetail(response.data)
    }

    return(
        <div className="basis-1/5 flex flex-col justify-center">
            <Image
                alt={name}
                src={pokemonDetail.sprites.front_default || ''} 
                width={200}
                height={200}
            />
            <span>{name}</span>
        </div>
    )
}

export default PokemonCard