import { useSelector } from "react-redux"
import CardGenre from "../CardGenre/CardGenre"
import styles from './SliderGenres.module.css'
import { useState } from "react"

const SliderGenres = () => {
    const Genres = useSelector(state=>state.genres)

    const [ currentImage, setCurrentImage ] = useState([0,1,2])

    const numberOfgenres = Genres.length

    let a = currentImage[0]
    let b = currentImage[1]
    let c = currentImage[2]

    const nextGenre = () => {
        a = b
        b = c
        c === numberOfgenres-1? c = 0 : c += 1
               
        setCurrentImage([a,b,c])
    }

    const previusGenre = () => {

        c = b
        b = a
        a === 0 ? a = numberOfgenres-1 : a -= 1
               
        setCurrentImage([a,b,c])

    }
    
    return(
        <div className={styles.container}>
            <button onClick={previusGenre}>⇦</button>
            {Genres.map((genre, index)=>{
                return <>
                {currentImage.includes(index)  && (
                    <CardGenre
                    key={genre.id}
                    id={genre.id}
                    name={genre.name}
                    image={genre.image_background}                
                    /> 
                )}
                </>
                
            })}
            <button onClick={nextGenre}>⇨</button>
        </div>
    )
}

export default SliderGenres