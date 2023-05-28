import { useEffect } from "react"
import SliderGenres from "../../components/SliderGenres/SliderGenres"
import CardsContainer from "../../components/CardsContainer/CardContainer"
import styles from './Home.module.css'
import { useDispatch } from "react-redux"
import { getGenres, getVideoGames } from "../../redux/actions"

const Home = ()=>{

    const dispatch = useDispatch ()

    useEffect(()=>{
        dispatch(getVideoGames())
        dispatch(getGenres())
    },[])

    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <SliderGenres/>
            <CardsContainer/>
           
        </div>
    )

}

export default Home