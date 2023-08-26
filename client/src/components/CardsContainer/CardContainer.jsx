

import Card from '../Card/Card'
import styles from './CardContainer.module.css'
import React from 'react'

const CardsContainer = (props) => {
    const { items, previousPage, nextPage, currentPage, last_page, videogames } = props

    return(
        <div className={styles.container}>
            <div className={styles.buttons}>
                {currentPage > 1 && <button className={styles.prev} onClick={previousPage}></button>}
                <h2 className={styles.currentPage} >{currentPage} for {Math.floor(videogames.length/15)+1}</h2>
                {currentPage < last_page+1  && <button className={styles.next} onClick={nextPage}></button>}
            </div>
            <div className={styles.mapCardsContainer} >
                {items.map((game, index)=>{
                    return (
                        <Card
                            key={index}
                            id={game.id}
                            name={game.name}
                            background_image={game.background_image}
                            genres={game.genres.map((gen)=>gen.name)}
                            platforms={game.platforms.map((plat) => plat.platform.name)}
                        />)
                })}
            </div>
            <div className={styles.buttons}>
                {currentPage > 1 && <button className={styles.prev} onClick={previousPage}></button>}
                <h2 className={styles.currentPage} >{currentPage} for {Math.floor(videogames.length/15)+1}</h2>
                {currentPage < last_page+1  && <button className={styles.next} onClick={nextPage}></button>}
            </div>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default CardsContainer