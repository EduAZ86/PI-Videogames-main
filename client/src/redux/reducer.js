import { GET_VIDEOGAMES,GET_VG_BY_ID,GET_VG_BY_NAME, ADD_VIDEOGAME, DELETE_VG, GET_GENRE   } from "./actionTypes"

const initialState = {
    videogames: [],
    genres: []
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {...state, videogames: action.payload}
            
          
    
        default:
            return { ...state}
          
    }

}

export default rootReducer