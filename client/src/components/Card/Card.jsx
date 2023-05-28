import styles from './Card.module.css'
const Card = (props) => {
    return(
        <div className={styles.container}>
            <h3>{props.name}</h3>                   
            <img src={props.image} alt="imagen" className={styles.image} />
        </div>
    )
}

export default Card