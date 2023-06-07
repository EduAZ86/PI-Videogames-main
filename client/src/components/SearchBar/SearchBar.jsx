import { useState } from "react"
import { useDispatch } from "react-redux"
import { cleanVideoGamesByName, getVideoGamesByName } from "../../redux/actions"
import styles from './searchBar.module.css'
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

    return <div className={styles.container}>
        <input onChange={handleChange} value={nameVG} type='text' placeholder='Search' className={styles.input}/>
        <button onClick={onClean} className={styles.buttonX}>X</button>
        <button onClick={() => onSearch(nameVG)} className={styles.buttonSearch} ></button>


    </div>
}

export default SearchBar