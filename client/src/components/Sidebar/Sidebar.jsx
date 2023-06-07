import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Sidebar.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { getVideoGames, organizer } from '../../redux/actions'
import { filterOrigin } from '../../redux/actions'
import { useState } from 'react'


const Sidebar = (props) => {

    const dispatch = useDispatch()

    const datafilter = (data) => {
        dispatch(filterOrigin(data))
    }
 
    const [ band, setBand ] = useState(false)

    const sidebar_landing = () => {
        setBand(!band)
    }

    return (
        <div className={styles.container}>
            <button onClick={() => sidebar_landing()}  className={styles.buttonhamburger}></button>
            {band? ( <div className={styles.filters}>
                    <div className={styles.forname}>
                        <h4 className={styles.title}>for name</h4>
                        <button type="button" onClick={() => {props.handler_sort('ZA')}} className={styles.azbutton}/>
                        <button type="button" onClick={() => {props.handler_sort('AZ')}} className={styles.zabutton}/>
                    </div>
                    <div className={styles.forname}>
                        <h4 className={styles.title}>for rating</h4>
                        <button type="button" onClick={() => {props.handler_sort('>')}} className={styles.upratingbutton}/>
                        <button type="button" onClick={() => {props.handler_sort('<')}} className={styles.downratingbutton}/>
                    </div>
                    <div className={styles.forname}>
                        <h4 className={styles.title}>released</h4>
                        <button type="button" onClick={() => {props.handler_sort('ase')}} className={styles.asending}/>
                        <button type="button" onClick={() => {props.handler_sort('des')}} className={styles.desending}/>
                    </div>
                    <div className={styles.origen}>
                    
                        <button type="button" onClick={() =>  datafilter('data')} className={styles.data} ></button>
                        <button type="button" onClick={() =>  datafilter('api')} className={styles.api} ></button>

                    </div>

               
            </div>):(<></>)}

            <div className={styles.links}>
                <NavLink to='/home' className={styles.home}></NavLink>
                <NavLink to='/create' className={styles.form}></NavLink>
                
            </div>
            
        </div>)
}

export default Sidebar