import { useSelector } from 'react-redux'
import CardSlider from '../CardGenre/CardSlider'
import styles from './Slider.module.css'
import { useState } from "react"
import nextIcon from '../../assets/flecha-derecha.png'
import prevIcon from '../../assets/flecha-izquierda.png'
const Slider = (props) => {
    const Items = props.Items

    const [ currentItem, setCurrentItem ] = useState([0,1,2])

    const numberOfItems = Items.length

    let a = currentItem[0]
    let b = currentItem[1]
    let c = currentItem[2]

    const nextItem = () => {
        a = b
        b = c
        c === numberOfItems-1? c = 0 : c += 1
               
        setCurrentItem([a,b,c])
    }

    const previusItem = () => {

        c = b
        b = a
        a === 0 ? a = numberOfItems-1 : a -= 1
               
        setCurrentItem([a,b,c])

    }
    
    return(
        <div className={styles.container}>
            <button onClick={previusItem} className={styles.previus}><img className={styles.img} src={prevIcon} alt="" /></button>
            {Items.map((item, index) => {
                return (
                    currentItem.includes(index) && (
                    <CardSlider
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image_background}
                        items_filter={props.items_filter}
                    />
                    )
                );
                })}
            <button onClick={nextItem} className={styles.next}><img className={styles.img} src={nextIcon} alt="" /></button>
        </div>
    )
}

export default Slider