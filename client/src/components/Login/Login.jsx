import { Form } from 'react-router-dom'
import styles from './Login.module.css'
import { useState } from 'react'


const Login = (props) => {

    const { login, validation } = props

    const [userData, setUserData ] = useState({email:'', password:''})
    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
      const property = event.target.name
      const value = event.target.value
      setUserData({...userData, [property]:value})
      setErrors(validation({...userData, [property]:value}))
    }

    const handleSubmit = () => {       
        login(userData)
    }


    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit} autoComplete='off' >
                <div className={styles.div}>
                    <label className={styles.label} htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='email' value={userData.email} onChange={handleChange}
                    className={styles.imput} />
                </div>
                <div  className={styles.div}>
                    <label  className={styles.label} htmlFor="password">Password</label>
                    <input type='password' name='password' placeholder='password' value={userData.password} onChange={handleChange}
                    className={styles.imput} />
                </div>
                <button type='button' className={styles.button} onClick={()=>handleSubmit()}>Submit</button>                
            </form>
            <div className={styles.errorContainer}>
            {
                    errors.email ?  (
                        <p className={styles.error} >{errors.email}</p>

                    ) : errors.emailVacio ? (
                        <p className={styles.error} >{errors.emailVacio}</p>
                    ) : 
                    errors.validEmail ?
                    (
                        <p className={styles.error} >{errors.validEmail}</p>
                    ) :
                    (
                        <p className={styles.error} >{errors.caracteres}</p>
                    ) 
            }
            {
                    errors.password ?  (
                        <p className={styles.error} >{errors.password}</p>
                    ) : 
                    errors.incorrectPass ? (
                        <p className={styles.error} > {errors.incorrectPass} </p>
                    ) :
                    ''
            } 
       </div>

        </div>
        )

}

export default Login