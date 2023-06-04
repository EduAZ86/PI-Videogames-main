import styles from './CardSlider.module.css'
const CardSlider = (props) => {
    return(
        <div className={styles.container} >
            <button className={styles.gradient} onClick={() => {props.items_filter(props.name)}}></button>
            <h3 className={styles.name}>{props.name}</h3>                   
            <img src={props.image} alt="imagen" className={styles.image} />
        </div>
    )
}

export default CardSlider