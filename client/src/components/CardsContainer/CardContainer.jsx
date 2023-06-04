
import Card from '../Card/Card'
import styles from './CardContainer.module.css'



const CardsContainer = (props) => {

    const { items, previousPage, nextPage, currentPage, ITEMS_FOR_PAGE, videogames } = props

    return(
        <div className={styles.container}>
            <div className={styles.mapCardsContainer} >
                {items.map((game)=>{
                    return <Card
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        background_image={game.background_image}
                        genres={game.genres.map((gen)=>gen.name)}
                        platforms={game.platforms.map((plat) => plat.platform.name)}
                    />
                })}
            </div>
            <div className={styles.buttons}>
                {currentPage > 0 && <button className={styles.prev} onClick={previousPage}>previous</button>}
                {items.length === ITEMS_FOR_PAGE && <button className={styles.next} onClick={nextPage}>next</button>}
            </div>
            <h2 className={styles.currentPage} >{currentPage+1} for {Math.floor(videogames.length/15)+1}</h2>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default CardsContainer