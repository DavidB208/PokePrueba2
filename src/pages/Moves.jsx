import { useParams } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

//Components
import {CardMoves} from "../components/CardMoves"

//Styles
import '../sass/moves.scss'

//Hooks
import { useState, useEffect } from 'react'

const Moves = () => {
    const params = useParams();

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
      getPokemon()
    }, [])
  
    async function getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.ide}/`)
      const poke = await response.json()
  
      setPokemon(poke)
      console.log(poke)
    }

    return (
        <div className="container-moves">
            <div className="topMoves">
                <h1>Moves</h1>
                <Link className="nameNone" to={`/pokemon/${params.ide}`} key={params.id}>
                    <button className="btn-search">Back</button>
                </Link>
            </div>
            <div className="container-grid">
                <div className="grid-moves">
                    {
                        pokemon?
                        pokemon.moves.map((m) =>{
                        return <CardMoves
                            key= {m.move.name}
                            name = {m.move.name}
                        />
                        }):
                        <h3 className='normal'>Load...</h3>
                    }
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export { Moves }