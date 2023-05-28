import { GET_VIDEOGAMES, GET_GENRE, GET_VG_BY_ID, ADD_VIDEOGAME, GET_VG_BY_NAME, DELETE_VG } from "./actionTypes"
import axios from 'axios'

const URL = 'http://localhost:3001'

export const getVideoGames = () => {
    return async (dispatch) => {
        const videogames = await axios.get(`${URL}/videogames`)
                  
        return dispatch({type: GET_VIDEOGAMES, payload: videogames.data});
    }
}

export const getVideoGameById = (id) => {
    return async (dispatch) => {
        const detailVideoGame = await axios.get(`${URL}/videogames/${id}`)
        return dispatch({type: GET_VG_BY_ID, payload: detailVideoGame.data })
    }

}

export const getVideoGamesByName = (name) =>{
    return async (dispatch) =>{
        const vGamesByName = await axios.get(`${URL}/videogames/name?name=${name}`)
        return dispatch({type: GET_VG_BY_NAME, payload: vGamesByName.data})
    }
}

export const getGenres = () => {
    return async (dispatch) => {
        const genres = await axios.get(`${URL}/genres`)
        return dispatch({type: GET_GENRE, payload: genres.data})
    }
}