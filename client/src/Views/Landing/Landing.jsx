import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getVideoGames, getGenres, getAllUsers,postNewUser, setAccess } from "../../redux/actions"
import Login from "../../components/Login/Login"
import styles from './Landing.module.css'


const Landing = ()=>{
    // const [access, setAccess] = useState(false)

    const dispatch = useDispatch ()
    const users = useSelector((state) => state.users)
    const access = useSelector((state => state.access))
    
    useEffect (() => {             
        dispatch(getGenres())
        dispatch(getVideoGames())
        dispatch(getAllUsers())

    },[dispatch,access])


    const navigate = useNavigate()
    
    const login = (userData) => {
        const { email, password } = userData
        if(!users.some((us) => us.email === email && us.password === password)){
            dispatch(postNewUser(userData)) 
        }
        if (users?.some((us) => us.email === email && us.password === password)) {
            dispatch(setAccess(true))
        }
        
       
        if (access) {
            navigate('/home')
        }

    }

    const validation = (data)=>{

        let errors ={};
        
        const expRegEmail =  new RegExp(/\S+@\S+\.\S+/)
    
        const expRegPassword = new RegExp (/^[a-z0-9_-]{6,10}$/)
        
        if(!expRegEmail.test(data.email)) {
            errors.email = 'Debe ingresar un email valido'
        }
        if(!data.email) {
            errors.emailVacio = "Debes ingresar un email"
        }
        if(!users.some((us) => us.email === data.email)) {
            errors.validEmail = "Email no registrado"
        }
        if(data.email.length > 35) {
            errors.caracteres = "Debe ser un email menor a 35 caracteres"
        }
        if(!expRegPassword.test(data.password)) {
            errors.password = "Debe contener letras y numeros, ademas tiene que tener una longitud entre 6 y 10 caracteres"
        }
        if(!users?.some((us) => us.email === data.email && us.password === data.password)) {
            errors.incorrectPass = "Contraseña incorrecta"
        }
        return errors;
    }


    return (
        <div className={styles.container}>
           
            <Login  login={login} validation={validation}></Login>
           

        </div>
    )

}

export default Landing