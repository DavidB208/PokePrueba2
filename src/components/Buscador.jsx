//Styles
import '../sass/buscador.scss'

//Icons
import { FaSearch } from "react-icons/fa";

const Buscador = ( {busqueda , setBusqueda, buscarPokemon}) => {

  return (
    <form className='container-search' onSubmit={buscarPokemon}>
        <div className='container-input'>
            {<FaSearch />}
            <input type="search"
            placeholder="Search pokemon"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            />
        </div>
        <button className="btn-search" type='submit'>Search</button>
    </form>
  )
}

export {Buscador}