import { useEffect, useState } from "react"
import styles from './Home.module.css'
import { useDispatch, useSelector } from "react-redux"
import { filterGenre, getGenres, getVideoGames } from "../../redux/actions"
import Pagination from "../../components/Pagination/Pagination"
import SliderGenres from "../../components/SliderGenres/SliderGenres"
import Loader from "../../components/Loader/Loader"



const Home = ()=>{
   
    const dispatch = useDispatch ()
    const video_game = useSelector((state) => state.videogames)
    const cache = useSelector ((state)=>state.cache)
    
    const genres_filter = (genre) => {
        dispatch(filterGenre(genre))
    }

    useEffect (() => {
        if (!video_game.length) {
        dispatch(getVideoGames())            
        }
        dispatch(getGenres())
       
        
    },[dispatch,video_game])


   
 
    return (
        <div className={styles.container}>         
        {video_game.length?
           <div className={styles.subContainer}>                              
                <SliderGenres genres_filter={genres_filter}/>
                <SliderGenres genres_filter={genres_filter}/>
                <Pagination/>           
            </div>
         :<Loader/>}
        </div>
    )

}

export default Home