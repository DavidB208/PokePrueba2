import { useState, useEffect } from "react";
//import { PokemonInfo } from "../components/PokemonInfo";
const URL_DEFAULT = `https://pokeapi.co/api/v2/pokemon?limit=20offset=0/`
const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

function usePokemones() {

    const [pokemones, setPokemones] = useState([])
    const [siguienteUrl, setSiguienteUrl] = useState('')

    const fetchPokemones = async (url) => {
        const response = await fetch(url)
        const poke = await response.json()

        const abilities = poke.abilities.map(a => a.ability.name)
        const types = poke.types.map(t => t.type.name)

        return{
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other['official-artwork'].front_default,
            abilities,
            types
        }
    }

    useEffect(()=>{
        obtenerPokemones()
    },[])

    async function getPokemones (url = URL_DEFAULT) {
        const response = await fetch (url)
        const listPokemones = await response.json()
        const {next, results}  = listPokemones

        const pokemones = await Promise.all(
            results.map((pokemon) => fetchPokemones(pokemon.url))
        )

        return {next, pokemones}
    }

    async function obtenerPokemones () {
        const {next, pokemones} = await getPokemones()
        setPokemones(pokemones)
        setSiguienteUrl(next)
    }

    async function masPokemones () {
        console.log('mas pokemones')
        const {next, pokemones} = await getPokemones(siguienteUrl)
        console.log(next)
        setPokemones(prev => [...prev, ...pokemones])
        setSiguienteUrl(next)
    }

    async function searchPokemon (busqueda) {
        const url = `${URL_ENDPOINT}${busqueda.toLocaleLowerCase()}`
        
        const response = await fetch(url)
        console.log(response)

        if( response.status == 404 ){
            return null
        }

        const poke = await response.json()
        const id = poke.id

        return id
    }

    return {pokemones, masPokemones, searchPokemon}
}

export {usePokemones}