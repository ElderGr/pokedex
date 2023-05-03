import api from "@/services/api"
import { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link";

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
            <svg height={30} width={30} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <Link href={name}>
                <Image
                    alt={name}
                    src={pokemonDetail.sprites.front_default || ''} 
                    width={200}
                    height={200}
                />
                <span>{name}</span>
            </Link>
            
        </div>
    )
}

export default PokemonCard