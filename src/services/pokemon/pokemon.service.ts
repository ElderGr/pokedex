import api from "@/api"
import { IDetailPokemonParams, IListPokemonParams, IListPokemonsResult, IPokemonDetail } from "./pokemon.types"
import { AxiosResponse } from "axios"

class PokemonService {
    async list({
        offset = 1,
        limit = 5
    }: IListPokemonParams): Promise<AxiosResponse<IListPokemonsResult>>{
        const result = await api.get(`/pokemon?offset=${offset}&limit=${limit}`)
        return result
    }

    async details({
        pokemonName
    }: IDetailPokemonParams): Promise<AxiosResponse<IPokemonDetail>> {
        const result = await api.get(`/pokeon/${pokemonName}`)

        return result
    }
}

export default PokemonService