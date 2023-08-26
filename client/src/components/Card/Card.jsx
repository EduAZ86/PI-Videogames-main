import styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
    return(
        <div 
            className={styles.container}     
        >
            <NavLink className={styles.name} to={`/detail/${props.id}`} >{props.name}</NavLink>
            <h4 className={styles.genres} >{props.genres.slice(0,3).map((gen, index) => <button key={index}>{gen}</button>)}</h4>
            <div className={styles.platforms} >{props.platforms.slice(0,3).map((plat, index) => <button key={index}>{plat}</button>)}</div>                  
            <img src={props.background_image} alt="imagen" className={styles.image} />
        </div>
    )
}

export default Card