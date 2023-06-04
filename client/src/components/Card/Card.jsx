import styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
    return(
        <div className={styles.container}>
            <NavLink className={styles.name} to={`/detail/${props.id}`} >{props.name}</NavLink>
            <h4 className={styles.genres} >{props.genres.join(' - ')}</h4>
            <h4 className={styles.platforms} >{props.platforms.join(' - ')}</h4>                  
            <img src={props.background_image} alt="imagen" className={styles.image} />
        </div>
    )
}

export default Card