import { GET_VIDEOGAMES, GET_GENRE, GET_VG_BY_ID, ADD_VIDEOGAME, ERROR,
     GET_VG_BY_NAME,  CLEAN_VG_BY_NAME ,DELETE_VG, ORDER, ORIGIN_FILTER, GENRES_FILTER, PLATFORM_FILTER, CLEAN_FILTERS, GET_PLATFORM, GET_ALL_USERS, POST_NEW_USER, ACCESS } from "./actionTypes"
import axios from 'axios'

const URL = 'http://localhost:3001'

export const setAccess = (access) => {
    return (dispatch) => {
        return dispatch({type:ACCESS , payload: access})
    }
}

export const postVideoGame = (newVideoGame) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}/videogames`,newVideoGame)
            return dispatch({type:ADD_VIDEOGAME, payload: response})
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
        
    }
}
export const getVideoGames = () => {
    return async (dispatch) => {
        try {
            const videogames = await axios.get(`${URL}/videogames`)                      
            return dispatch({type: GET_VIDEOGAMES, payload: videogames.data});            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message}) 
        }
    }
}

export const getVideoGameById = (id) => {
    return async (dispatch) => {
        try {
            const detailVideoGame = await axios.get(`${URL}/videogames/${id}`)
            return dispatch({type: GET_VG_BY_ID, payload: detailVideoGame.data })            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
    }

}

export const getVideoGamesByName = (name) =>{
    return async (dispatch) =>{
        try {
            const vGamesByName = await axios.get(`${URL}/videogames/name?name=${name}`)
            return dispatch({type: GET_VG_BY_NAME, payload: vGamesByName.data})            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
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
        try {
            const genres = await axios.get(`${URL}/genres`)
            return dispatch({type: GET_GENRE, payload: genres.data})            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
    }
}

export const getPlatforms = () => {
    return async (dispatch) => {
        try {
            const platforms = await axios.get(`${URL}/platforms`)
            return dispatch({type: GET_PLATFORM, payload: platforms.data})            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
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
   return ( dispatch ) => {
       return dispatch({type: ORDER, payload: order})
   }
    
}


//USERS

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const users = await axios.get(`${URL}/users`)
            return dispatch({type: GET_ALL_USERS, payload: users.data})            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
    }
}

export const postNewUser = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}/users`,user)
            return dispatch({type: POST_NEW_USER, payload: data})            
        } catch (error) {
            return dispatch({type: ERROR, payload: error.message})
        }
    }
}

