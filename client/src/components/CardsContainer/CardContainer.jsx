import Card from '../Card/Card'
import styles from './CardContainer.module.css'
import { useSelector } from 'react-redux'

const CardsContainer = () => {
    const videoGames = useSelector(state=>state.videogames)
    return(
        <div>
            {videoGames.map((game)=>{
                return <Card
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    image={game.background_image}
                    genres={game.genres}
                />
            })}
        </div>
    )
}

export default CardsContainer