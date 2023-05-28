import { GET_VIDEOGAMES,GET_VG_BY_ID,GET_VG_BY_NAME, ADD_VIDEOGAME, DELETE_VG, GET_GENRE   } from "./actionTypes"

const initialState = {
    videogames: [],
    detailVG: [],
    videogamesName: [],
    genres: []
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {...state, videogames: action.payload}
            
        case GET_VG_BY_ID:
            return {...state, detailVG: action.payload}
        
        case GET_VG_BY_NAME:
            return {...state, videogamesName: action.payload}
        
        case GET_GENRE:
            return {...state, genres: action.payload}
    
        default:
            return { ...state}
          
    }

}

export default rootReducer