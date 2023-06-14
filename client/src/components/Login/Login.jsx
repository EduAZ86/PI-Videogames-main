import React from 'react'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'

import validation from './validation.js'

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
                <div className={styles.div}>
                    <label className={styles.label} htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='email' value={userData.email}  onChange={handleChange}
                    className={styles.imput} />
                </div>
                <div  className={styles.div}>
                    <label  className={styles.label} htmlFor="password">Password</label>
                    <input type='password' name='password' placeholder='password' value={userData.password} onChange={handleChange}
                    className={styles.imput} />
                </div>

                { errors.registration?
                <>
                    <div  className={styles.div2}>
                    <label  className={styles.label} htmlFor='confirmation'>Password</label>
                    <input type='password' name='confirmation' placeholder='confirm password'  value={userData.confirmation}  onChange={handleChange}                
                    className={styles.imput} /> 
                    </div>
                    <button type='submit'  className={styles.button} disabled={(userData.confirmation !== userData.password) || errors.errorPassword === 'La contraseña debe incluir letras, numeros y una longitud de entre 6 a 10 caracteres'  }
                     onClick={()=>handleRegister({email:userData.email, password:userData.password})}>Register</button> 
                </>
                :<button type='submit'  className={styles.button} disabled={!errors.access} onClick={()=>handleSubmit()}>Submit</button>                
                }
            </form>
            <ul className={styles.errorContainer}>
                <li>{errors.errorEmail}</li>
                <li>{errors.errorPassword}</li>
                <li>{errors.errorRegistration}</li>
            </ul>

        </div>
        )
}

export default Login
