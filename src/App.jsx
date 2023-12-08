import { useState } from 'react'

//Components
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Buscador } from './components/Buscador'
import { PokeGrid } from './pages/PokeGrid'
import { PokeInfo } from './pages/PokeInfo'
import { Moves } from './pages/Moves'
import { Default } from './pages/Default'
import { usePokemones } from './hooks/usePokemones'

//Styles
import './sass/app.scss'


const App = () => {

  const [busqueda, setBusqueda] = useState('')
  const [poke, setPoke] = useState({ pokemon: {} })
  const { searchPokemon } = usePokemones()

  const navigate = useNavigate()

  const buscarPokemon = async (e) => {
    e.preventDefault()

    if (!busqueda) return

    const pokemon = await searchPokemon(busqueda)

    if( !pokemon ){
      navigate('/pokemon/default')
    }
    else {
      navigate(`/pokemon/${pokemon}`)
    }
  }

  return (
    <div className='pokedex'>
      <Header />
      <Buscador busqueda = {busqueda} setBusqueda = {setBusqueda} buscarPokemon={buscarPokemon}/>
      <Routes>
        <Route path='/' element={<PokeGrid />}></Route>
        <Route path='/pokemon/:ide' element={<PokeInfo />}></Route>
        <Route path='/pokemon/moves/:ide' element={<Moves />}></Route>
        <Route path='/pokemon/default' element={<Default />}></Route>
        <Route path='*' element={<Default />}> </Route>
      </Routes>
    </div>
  )
}

export { App }