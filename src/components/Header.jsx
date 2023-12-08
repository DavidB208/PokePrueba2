//Style
import '../sass/header.scss'

const Header = () => {
  return (
    <div className="header">
        <a href="/" className="header-container">
            <img className='header-logo' src="src\assets\pokedex.png" alt="Logo Pokedex"></img>
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