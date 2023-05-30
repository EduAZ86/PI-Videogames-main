import { useState } from "react"
import { useDispatch } from "react-redux"
import { cleanVideoGamesByName, getVideoGamesByName } from "../../redux/actions"

const SearchBar = () => {

    const [ nameVG, setNameVG ] = useState('')

    const handleChange = (event) => {
        setNameVG(event.target.value)
    }

    const onClean = () => {
        setNameVG('')
        dispatch(cleanVideoGamesByName())
    }

    const dispatch = useDispatch()

    const onSearch = (name) => {
        if (name){
            dispatch(getVideoGamesByName(name))
            
        }
    }

    return <div>
        <input onChange={handleChange} value={nameVG} type='text' placeholder='Search'/>
        <button onClick={() => onSearch(nameVG)} >Search</button>
        <button onClick={onClean}>X</button>


    </div>
}

export default SearchBar