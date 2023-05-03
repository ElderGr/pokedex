import { useRouter } from "next/router"

function PokemonDetail(){
    const router = useRouter()
    const { pokemon } = router.query
    
    return(
        <div>{pokemon}</div>
    )
}

export default PokemonDetail