import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'


import { useSelector } from 'react-redux'

const NavBar = () => {
   
    const VG_by_name = useSelector((state) => state.videogamesName)

    return (
        <div className={styles.container}>
            
            <div className={styles.subContainer}>
                <SearchBar/>
                { VG_by_name.length>0
                ?(<div className={styles.results}> 
                    {VG_by_name.map((game)=>{
                        return(
                        <li><NavLink  to={`/detail/${game.id}`} >{game.name}</NavLink></li>
                        )
                    })}            
                </div>)            
                :(<></>)            
                } 
            </div>
        </div>
    )
}

export default NavBar