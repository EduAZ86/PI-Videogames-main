import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Sidebar from '../Sidebar/Sidebar'

import { useSelector } from 'react-redux'

const NavBar = () => {
   
    const VG_by_name = useSelector((state) => state.videogamesName)

 
  


    return (
        <div className={styles.container}>
            <Sidebar/>
            <div>
            <SearchBar />
            { VG_by_name.length>0? (<div> 
                {VG_by_name.map((game)=>{
                return(<li>{game.name}</li>)
            })}
            
             </div>) 
            
            : (<>no buscando</>)
            
            } 
            </div>
        </div>
    )
}

export default NavBar