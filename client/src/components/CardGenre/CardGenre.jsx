import styles from './CardGenre.module.css'
const CardGenre = (props) => {
    return(
        <div className={styles.container} >
            <button className={styles.gradient} onClick={() => {props.genres_filter(props.name)}}></button>
            <h3 className={styles.name}>{props.name}</h3>                   
            <img src={props.image} alt="imagen" className={styles.image} />
        </div>
    )
}

export default CardGenre