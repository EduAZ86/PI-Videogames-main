import React from 'react'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'

import validation from './validation.js'
import InputField from '../InputField/InputField'


const Login = (props) => {    
    
    const { dB_Users, handleSubmit, handleRegister } = props
      
    const [userData, setUserData ] = useState({email:'', password:'', confirmation:''})    
    const [ errors, setErrors ] = useState({errorEmail:'', errorPassword:'',errorRegistration:'', access: false, registration: false})

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setUserData({...userData, [property]:value})  
     
    }

    useEffect(() => {
    setErrors( validation(dB_Users, userData))
  }, [userData]);   
          
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit} autoComplete='off' >
                <InputField
                    label='Email'
                    name='email'
                    placeholder='email'
                    type='email'
                    value={userData.email}
                    onChange={handleChange}
                />
                <InputField
                    label='Password'
                    name='password'
                    placeholder='password'
                    type='password'
                    value={userData.password}
                    onChange={handleChange}
                />
                { errors.registration?
                <>
                <InputField
                    label='Password'
                    name='confirmation'
                    placeholder='confirm password'
                    type='password'
                    value={userData.confirmation}
                    onChange={handleChange}
                />

                <button
                    type='submit'
                    className={styles.button} 
                    disabled={(userData.confirmation !== userData.password) || errors.errorPassword === 'La contraseña debe incluir letras, numeros y una longitud de entre 6 a 10 caracteres'  }
                    onClick={()=>handleRegister({email:userData.email, password:userData.password})}
                >Register</button> 
                </>
                :<button 
                    type='submit'
                    className={styles.button} 
                    disabled={!errors.access} 
                    onClick={()=>handleSubmit()}
                >Submit</button>                
                }
            </form>
            <ul className={styles.errorContainer}>
                <li className={styles.error}>{errors.errorEmail}</li>
                <li className={styles.error}>{errors.errorPassword}</li>
                <li className={styles.error}>{errors.errorRegistration}</li>
            </ul>

        </div>
        )
}

export default Login
