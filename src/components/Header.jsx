//Style
import '../sass/header.scss'
import logo from '../assets/pokedex.png'
const Header = () => {
  return (
    <div className="header">
        <a href="/" className="header-container">
            <img className='header-logo' src={logo} alt="Logo Pokedex"></img>
        </a>
        <div className='light'>
          <div className='light-1'></div>
          <div className='light-2'></div>
          <div className='light-3'></div>
        </div>
    </div>
  )
}

export {Header}