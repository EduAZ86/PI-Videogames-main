import React from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Sidebar from '../Sidebar/Sidebar'
import { setAccess } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const NavBar = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(setAccess(false))
        navigate('/')
    }
   
    const VG_by_name = useSelector((state) => state.videogamesName)

    return (
        <div className={styles.container}>
            <Sidebar handler_sort={props.handler_sort} />           
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
            <button type='button' className={styles.button} onClick={() => logOut()}></button>          
        </div>
    )
}

export default NavBar