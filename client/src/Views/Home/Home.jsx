import { useEffect } from "react"
import SliderGenres from "../../components/SliderGenres/SliderGenres"
import styles from './Home.module.css'
import { useDispatch } from "react-redux"
import { getGenres } from "../../redux/actions"
import Pagination from "../../components/Pagination/Pagination"

const Home = ()=>{

    const dispatch = useDispatch ()

    useEffect(()=>{        
        dispatch(getGenres())
    },[])

    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <SliderGenres/>
            <Pagination/>           
        </div>
    )

}

export default Home