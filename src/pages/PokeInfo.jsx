import { useParams } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

//Styles
import '../sass/pokeinfo.scss'

//Hooks
import { useState, useEffect } from 'react'

const PokeInfo = () => {

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
    <div className='pokedexI'>
      <div className='pokemon'>

        <div className='pokemon-info'>
          <div className="pokemon-container">

            <div className='pokemon-title'>
              <div className='pokemon-name'>
                <h1 className='poke__name'>{pokemon? pokemon.name : 'Loading...'}</h1>
                <div className='card-types'>
                  {
                    pokemon?
                      pokemon.types.map((type) =>{
                        return <h3 key={type.type.slot} className={type.type.name}>{type.type.name}</h3>
                      }):
                      <h3 className='normal'>Load...</h3>
                  }
                </div>
              </div>

              <h1 className='poke__name'>{pokemon? 'Nº '+pokemon.id : '###'}</h1>

            </div>

            <div className='pokemon-abilities'>
              <h2>Abilities</h2>
              <div className='ab-types'>
                  {
                    pokemon?
                      pokemon.abilities.map((ab) =>{
                        return <h2 className='ability'>{ab.ability.name}</h2>
                      }):
                      <h2 className='ability'>Load...</h2>
                  }
                </div>
            </div>
          </div>

          <div className='pokemon-img'>
            {
              pokemon? <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" /> : <img src='' alt="" />
            }
          
          </div>
        </div>

        <div className='pokemon-stats'>
          <div className='pokemon-moves'>
            {
              pokemon?
              <Link className="nameNone" to={`/pokemon/moves/${pokemon.id}`} key={pokemon.id}>
                <button className="btn-search">See Moves</button>
              </Link>
              : <button className="btn-more">Loading Moves</button>
            }            
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export { PokeInfo }