import { Outlet, Link } from "react-router-dom"

//Styles
import '../sass/pokegrid.scss'

//Components
import { PokeCard } from '../components/PokeCard'
import { usePokemones } from '../hooks/usePokemones'

const PokeGrid = () => {

  const { pokemones, masPokemones } = usePokemones()

  return (
    <div className='container'>
      <div className='container-pokemon'>
        {pokemones.map((pokemon) => {
          return <Link className="nameNone" to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
              types={pokemon.types}
            />
          </Link>
        }
        )}
      </div>
      <div className="padButton">
        <button className='btn-more' onClick={masPokemones}>More</button>
      </div>
      <Outlet />
    </div>
  )
}

export { PokeGrid }