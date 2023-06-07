import { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { useParams } from "react-router-dom"
import { getVideoGameById } from "../../redux/actions"
import styles from './Detail.module.css'
import Loader from "../../components/Loader/Loader"
const Detail = ()=>{

    const { id } = useParams()
    const dispatch = useDispatch()
    const video_game = useSelector((state) => state.detailVG)
    useEffect(()=>{
        dispatch(getVideoGameById(id))
    },[dispatch,id])     


    const description_short = video_game.description_raw?.split('.').splice(0,2)
    const description = video_game.description_raw?.split('.').splice(2, video_game.description_raw.split('.').length-1)
    

    const platforms = video_game.platforms?.map((plat) => plat.platform.name)
    const genres = video_game.genres?.map((gen) => gen.name)
    const stores = video_game.stores?.map((sto) => sto.store.name)
    const developers = video_game.developers?.map((dev) => dev.name)
    const tags = video_game.tags?.map((tag) => tag.name)

    return (
        
        < >
            {video_game !== null?
                <>
                    <img className={styles.background} src={video_game.background_image_additional} alt="" />        
                    <div className={styles.subContainer}>
                        <div className={styles.name} >
                            <h1>{video_game.name}</h1>
                            <p>{description_short}.</p>
                            <h4> developers: {developers?.join(' - ')}</h4>
                            <h4>released: {video_game.released}</h4>
                        </div>
                        <div className={styles.imageContainer} >
                            <img className={styles.image} src={video_game.background_image} alt=""/>
                            <h2 className={styles.rating} >Rating: {video_game.rating}</h2>
                        </div>
                        <div className={styles.central} >
                            <h3>metacritic: {video_game.metacritic}</h3>
                            <h5>{tags?.join(' - ')}</h5>
                        
                        </div>
                        <div className={styles.info} >
                            <p className={styles.description}>{description}</p>                   
                        </div>
                        <div className={styles.tags} >
                        <h4>{platforms?.join(', ')}</h4>
                        <h4>{genres?.join(', ')}</h4>
                        <h4>{stores?.join(', ')}</h4>
                        </div>
                    </div>       
                
                </>
            : <Loader/>
        }
            
        </>
    )

}

export default Detail