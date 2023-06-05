import styles from './Form.module.css'
import GameCreator from '../../components/GameCreator/GameCreator'
const Form = ()=>{
    return (
        <div className={styles.container}>
            <h3>Estoy en el FOrm</h3>
            <GameCreator/>
        </div>
    )

}

export default Form