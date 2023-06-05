import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getVideoGames, getGenres, getAllUsers } from "../../redux/actions"
import Login from "../../components/Login/Login"


const Landing = ()=>{

    const dispatch = useDispatch ()
    const users = useSelector((state) => state.users)
    
    useEffect (() => {             
        dispatch(getGenres())
        dispatch(getVideoGames())
        dispatch(getAllUsers())

    },[dispatch,access])

    const [access, setAccess] = useState(false)

    const navigate = useNavigate()
    
    const login = (userData) => {
        const { email, password } = userData
        
        setAccess(users.find((us) => us.email === email && us.password === password))

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
        if(data.email !== "eduardo@example.com") {
            errors.validEmail = "Email incorrecto"
        }
        if(data.email.length > 35) {
            errors.caracteres = "Debe ser un email menor a 35 caracteres"
        }
        if(!expRegPassword.test(data.password)) {
            errors.password = "Debe contener letras y numeros, ademas tiene que tener una longitud entre 6 y 10 caracteres"
        }
        if(data.password !== "henry2023") {
            errors.incorrectPass = "Contraseña incorrecta"
        }
        return errors;
    }


    return (
        <div>
            <h1>Landing page</h1>
            <Login login={login} validation={validation}></Login>
            <Link to='/home'>Home</Link>

        </div>
    )

}

export default Landing