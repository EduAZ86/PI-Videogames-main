import { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { useParams } from "react-router-dom"
import { getVideoGameById } from "../../redux/actions"

const Detail = ()=>{

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getVideoGameById(id))
    },[])

  
    const video_game = useSelector((state) => state.detailVG)
    return (
        <div>
            <h1>Detail</h1>
            <li>{video_game.name}</li>
        </div>
    )

}

export default Detail