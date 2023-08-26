import { useEffect, useState } from "react"
import styles from './Home.module.css'
import { useDispatch, useSelector } from "react-redux"
import { filterGenre, filterPlatform, getGenres, getPlatforms, getVideoGames } from "../../redux/actions"
import Pagination from "../../components/Pagination/Pagination"
import Slider from "../../components/Slider/Slider"
import Loader from "../../components/Loader/Loader"



const Home = ()=>{
   
    const dispatch = useDispatch ()
    const video_game = useSelector((state) => state.videogames)
    const cache = useSelector ((state)=>state.cache)
    const Genres = useSelector(state=>state.genres)
    const Platforms = useSelector(state=>state.platforms)
    
    const genres_filter = (genre) => {
        dispatch(filterGenre(genre))
    }

    const platforms_filter = (platforms) => {
        dispatch(filterPlatform(platforms))
    }


    useEffect (() => {
        if (!video_game.length) {
        dispatch(getVideoGames())            
        }
        dispatch(getGenres())
        dispatch(getPlatforms())
       
        
    },[dispatch,video_game])


   
 
    return (
        <div className={styles.container}>         
        {video_game.length?
           <div className={styles.subContainer}>
                <span className={styles.background}/>                              
                <Slider
                    key='genre' 
                    items_filter={genres_filter}
                    Items={Genres}/>
                <Slider
                    key='platform' 
                    items_filter={platforms_filter} 
                    Items={Platforms} />
                <Pagination/>           
            </div>
         :<Loader/>}
        </div>
    )

}

export default Home