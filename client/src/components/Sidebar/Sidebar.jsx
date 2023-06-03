import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Sidebar.module.css'
import hamburger from '../../assets/hamburger_button.png'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoGames, organizer } from '../../redux/actions'

import { useState } from 'react'


const Sidebar = (props) => {

  
 
    const [ band, setBand ] = useState(false)

    const sidebar_landing = () => {
        setBand(!band)
    }


    // const [ orderStatus, setOrderStatus] = useState(false)
    // useEffect(()=>{
    // navigate('/home')        
    // },[orderStatus])

 

    // const dispatch = useDispatch()


    // const handlerOrder = (order,event) => {
    //     setOrderStatus(!orderStatus)
    //     if (orderStatus) return dispatch(organizer('CLEAN'))
   
              
    //     dispatch(organizer(order))
      
    // }


    // console.log(orderStatus)
    return (
        <div className={styles.container}>
            <button onClick={() => sidebar_landing()}  className={styles.buttonhamburger}><img className={styles.img} src={hamburger} alt="" /></button>
            {band? ( <div className={styles.filters}>
                    <div className={styles.forname}>
                        <h4 className={styles.title}>for name</h4>
                        <button onClick={() => {props.handler_sort('ZA')}} className={styles.azbutton}/>
                        <button onClick={() => {props.handler_sort('AZ')}} className={styles.zabutton}/>
                    </div>
                    <div className={styles.forname}>
                        <h4 className={styles.title}>for rating</h4>
                        <button onClick={() => {props.handler_sort('>')}} className={styles.upratingbutton}/>
                        <button onClick={() => {props.handler_sort('<')}} className={styles.downratingbutton}/>
                    </div>
                    <div className={styles.forname}>
                        <h4 className={styles.title}>released</h4>
                        <button onClick={() => {props.handler_sort('ase')}} className={styles.asending}/>
                        <button onClick={() => {props.handler_sort('des')}} className={styles.desending}/>
                    </div>

               
            </div>):(<></>)}

            <div className={styles.links}>
                <NavLink to='/home' className={styles.home}></NavLink>
                <NavLink to='/create' className={styles.form}></NavLink>
                
            </div>
            
        </div>)
}

export default Sidebar