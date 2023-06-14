import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getVideoGames, getGenres, getAllUsers,postNewUser } from "../../redux/actions"
import Login from "../../components/Login/Login"
import styles from './Landing.module.css'

const Landing = ()=>{

    const dispatch = useDispatch ()
    
    useEffect (() => {             
        dispatch(getGenres())
        dispatch(getVideoGames())
        dispatch(getAllUsers())

    },[dispatch])

    const dB_Users = useSelector((state) => state.users)
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('./home')
    }

    const handleRegister = (user_data) => {
        dispatch(postNewUser(user_data))
    }

    return (
        <div className={styles.container}>           
            <Login  dB_Users={dB_Users} handleSubmit={handleSubmit} handleRegister={handleRegister}></Login>
         </div>
    )
}

export default Landing
