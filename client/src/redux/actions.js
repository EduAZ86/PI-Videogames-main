import { GET_VIDEOGAMES, GET_GENRE, GET_VG_BY_ID, ADD_VIDEOGAME, GET_VG_BY_NAME, DELETE_VG } from "./actionTypes"
import axios from 'axios'

const URL = 'http://localhost:3001'
export const getVideoGames = () => {
    return async (dispatch) => {
        const videogames = await axios.get(`${URL}/videogames`)
                  
        return dispatch({type: GET_VIDEOGAMES, payload: videogames.data});
    }
}

const getVideoGamesById = () => {

}