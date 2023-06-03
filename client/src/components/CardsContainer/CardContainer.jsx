
import Card from '../Card/Card'
import styles from './CardContainer.module.css'



const CardsContainer = (props) => {

    const { items, previousPage, nextPage, currentPage, ITEMS_FOR_PAGE, videogames } = props

    return(
        <div>
            {items.map((game)=>{
                return <Card
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    background_image={game.background_image}
                    genres={game.genres}
                />
            })}
            {currentPage > 0 && <button onClick={previousPage}>previous</button>}
            {items.length === ITEMS_FOR_PAGE && <button onClick={nextPage}>next</button>}
            <h2>{currentPage+1}</h2>
            <h2>{videogames.length}</h2>
        </div>
    )
}

export default CardsContainer