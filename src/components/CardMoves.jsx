import { useParams } from "react-router-dom"

//Style
import '../sass/cardMoves.scss'

const CardMoves = ({name}) => {
    const params = useParams();

    return (
        <div className="card-moves">
            <div className='name'>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export {CardMoves}