import CardsContainer from "../../components/CardsContainer/CardContainer"
import styles from './Home.module.css'

const Home = ()=>{
    return (
        <div className={styles.container}>
            <CardsContainer/>
            <h1>Home</h1>
           
        </div>
    )

}

export default Home