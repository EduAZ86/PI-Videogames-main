import { useEffect, useState } from "react"
import styles from './Home.module.css'
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getVideoGames } from "../../redux/actions"
import Pagination from "../../components/Pagination/Pagination"
import SliderGenres from "../../components/SliderGenres/SliderGenres"
import Loader from "../../components/Loader/Loader"

const Home = ()=>{
    const dispatch = useDispatch ()
    const video_game = useSelector((state) => state.videogames)
    
    useEffect (() => {
        if (!video_game.length) {
        dispatch(getVideoGames())            
        }
        dispatch(getGenres())
    },[])


 
    return (
        <div className={styles.container}>         
        {video_game.length?
           <div className={styles.subContainer}>
                <h1>Home</h1>               
                <SliderGenres/>
                <Pagination/>           
            </div>
         :<Loader/>}
        </div>
    )

}

export default Home