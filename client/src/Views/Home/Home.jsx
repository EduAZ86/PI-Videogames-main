import { useEffect } from "react"
import CardsContainer from "../../components/CardsContainer/CardContainer"
import styles from './Home.module.css'
import { useDispatch } from "react-redux"
import { getVideoGames } from "../../redux/actions"

const Home = ()=>{

    const dispatch = useDispatch ()

    useEffect(()=>{
        dispatch(getVideoGames())
    },[])

    return (
        <div className={styles.container}>
            <CardsContainer/>
            <h1>Home</h1>
           
        </div>
    )

}

export default Home