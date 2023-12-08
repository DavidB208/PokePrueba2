//Styles
import '../sass/pokecard.scss'


const PokeCard = ({ name, id, img, types }) => {
  return (
    <div className="card-pokemon">
        <div className='poke-img'>
          <img src={img} alt="Pokemon img" />
        </div>
        <div className='poke-info'>
          <h2 className='poke-info-name'> {id}</h2>
          <h1 className="poke-info-name">{name}</h1>
          <div className='card-types'>
              <h3 className={types[0]} >{types[0]}</h3>
              <h3 className={types[1]}>{types[1]}</h3>
          </div>
        </div>
    </div>
  )
}

export {PokeCard}