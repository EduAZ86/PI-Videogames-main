import styles from './Form.module.css'
import GameCreator from '../../components/GameCreator/GameCreator'
const Form = ()=>{
    return (
        <div className={styles.container}>
            <span className={styles.background}/>
            <GameCreator/>
        </div>
    )

}

export default Form