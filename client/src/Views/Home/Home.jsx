import { useEffect } from "react"
import styles from './Home.module.css'
import { useDispatch } from "react-redux"
import { getGenres } from "../../redux/actions"
import Pagination from "../../components/Pagination/Pagination"
import SliderGenres from "../../components/SliderGenres/SliderGenres"
import Sidebar from "../../components/Sidebar/Sidebar"
const Home = ()=>{

    const dispatch = useDispatch ()

    useEffect(()=>{        
        dispatch(getGenres())
    },[])

    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.subContainer}>
                <h1>Home</h1>
                <SliderGenres/>
                <Pagination/>           
            </div>
        </div>
    )
}

export default Home