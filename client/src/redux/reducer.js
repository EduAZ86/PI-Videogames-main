import { GET_VIDEOGAMES,GET_VG_BY_ID,GET_VG_BY_NAME, ADD_VIDEOGAME, DELETE_VG, GET_GENRE, CLEAN_VG_BY_NAME, ORDER, GENRES_FILTER, ORIGIN_FILTER, PLATFORM_FILTER, CLEAN_FILTERS, GET_PLATFORM   } from "./actionTypes"

const initialState = {
    videogames: [],
    detailVG: [],
    videogamesName: [],
    genres: [],
    platforms: [],
    cache: []
}
const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_VIDEOGAMES:
            state.cache = [...state.videogames]
            return {...state, videogames: action.payload}
            
        case GET_VG_BY_ID:
            return {...state, detailVG: action.payload}
        
        case GET_VG_BY_NAME:
            return {...state, videogamesName: action.payload}

        case CLEAN_VG_BY_NAME:
            return {...state, videogamesName: action.payload}
        
        case GET_GENRE:
            return {...state, genres: action.payload}

        case GET_PLATFORM:
            return {...state, platforms: action.payload}

        case CLEAN_FILTERS:
            return {...state,videogames: state.cache}
        
        case ORIGIN_FILTER:
            const uuidRegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
            if (action.payload === 'data') {
                const filtered_for_origin = state.videogames.filter((game =>{
                     if (uuidRegExp.test(game.id)) return game        
                }))
                return {...state, videogames : filtered_for_origin}                
            }
            if (action.payload === 'api') {         
                const filtered_for_origin = state.videogames.filter((game =>{
                     if (!uuidRegExp.test(game.id)) return game        
                }))                
                return {...state, videogames : filtered_for_origin}
            }

        case PLATFORM_FILTER:
            const filtered_for_platform = state.videogames.filter((game) => game.platforms.map((plat => plat.platform.name)).includes(action.payload) )
            return{...state, videogames: filtered_for_platform}
        
        case GENRES_FILTER:
            const filtered_for_genre = state.videogames.filter((game) => game.genres.map((gen) => gen.name).includes(action.payload))
            return {...state, videogames: filtered_for_genre}    
  
        case ORDER:
            
            const orderGames = state.videogames.sort((a, b)=> {
                if(action.payload === 'AZ') {
                    if(a.name < b.name ) return -1;
                    if(b.name < a.name) return 1
                    return 0
                }
                if(action.payload === 'ZA')  {
                    if(a.name < b.name) return 1
                    if(b.name < a.name) return - 1
                    return 0
                }
                if(action.payload === '<') {
                    if(a.rating < b.rating ) return -1;
                    if(b.rating < a.rating) return 1
                    return 0
                }
                if(action.payload === '>')  {
                    if(a.rating < b.rating) return 1
                    if(b.rating < a.rating) return - 1
                    return 0
                }
                if(action.payload === 'ase') {
                    if(new Date(a.released).getTime() < new Date(b.released).getTime() ) return -1;
                    if(new Date(b.released).getTime() < new Date(a.released).getTime()) return 1
                    return 0
                }
                if(action.payload === 'des')  {
                    if(new Date(a.released).getTime() < new Date(b.released).getTime()) return 1
                    if(new Date(b.released).getTime() < new Date(a.released).getTime()) return - 1
                    return 0
                }
            })                        
            return {...state, videogames: orderGames}

        default:
            return { ...state}
          
    }
}


export default rootReducer