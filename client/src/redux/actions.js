import { GET_VIDEOGAMES, GET_GENRE, GET_VG_BY_ID, ADD_VIDEOGAME,
     GET_VG_BY_NAME,  CLEAN_VG_BY_NAME ,DELETE_VG, ORDER, ORIGIN_FILTER, GENRES_FILTER, PLATFORM_FILTER, CLEAN_FILTERS } from "./actionTypes"
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

export const cleanVideoGamesByName = () => {
    return (dispatch) => {
        const clean = []
        return dispatch({type: CLEAN_VG_BY_NAME, payload: clean})
    }
}

export const getGenres = () => {
    return async (dispatch) => {
        const genres = await axios.get(`${URL}/genres`)
        return dispatch({type: GET_GENRE, payload: genres.data})
    }
}

//FILTERS

export const cleanfilters = (clean) => {
    return ({type: CLEAN_FILTERS, payload: clean})
}
export const filterOrigin = (origin) => {
    return (dispatch) => {
        return dispatch({type: ORIGIN_FILTER, payload: origin})
    }
}
export const filterGenre = (genre) => {
    return (dispatch) => {
        return dispatch({type: GENRES_FILTER, payload: genre})
    }
}

export const filterPlatform = (platform) => {
    return ( dispatch) => {
        return dispatch({type:PLATFORM_FILTER, payload: platform})
    }
}

//ORGANIZER

export const organizer = (order) => {
   
    return ({type: ORDER, payload: order})
    
}