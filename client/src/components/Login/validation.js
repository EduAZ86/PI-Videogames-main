const validation = (dB_Users, userData)=>{
   
    const expRegEmail =  new RegExp(/\S+@\S+\.\S+/)    
    const expRegPassword = new RegExp (/^[a-z0-9_-]{6,10}$/)

    const errors = {errorEmail:'', errorPassword:'',errorRegistration:'', access: false, registration: false}

    ///el campo esta vacio?
    if(userData.email.trim() !== '') {
        errors.errorEmail = ''        
        /// el email ingresado es valido?
        if(expRegEmail.test(userData.email)) {
            /// SI /// el email es valido          
            errors.errorEmail = ''        
            const userIndex = dB_Users?.findIndex((us) => us.email === userData.email) 
            /// es un usuario registrado?  
            if (userIndex !== -1) {
                ///SI ESTA REGISTRADO
                errors.registration = false
                errors.errorRegistration = ''             
                /// la contraseña es correcta?
                if (dB_Users[userIndex].password === userData.password) {
                    /// SI LA CONTRASEÑA ES CORRECTA
                    errors.errorPassword = ''
                    errors.access = true          
                } else {
                    /// NO LA CONTRASEÑA ES INCORRECTA
                    errors.access = false  
                    errors.errorPassword = 'contraseña incorrecta'
                } 
            }
            if (userIndex === -1) {
                ///NO ESTA REGISTRADO
                errors.registration = true
                errors.errorEmail = 'Email no registrado, debes registrarse'             
                ///EL PASSWORD ES  VALIDO?
                if (expRegPassword.test(userData.password)) {
                    /// SI es valido
                    errors.errorPassword = '' 
                    /// El passowrd y la confirmacion son iguales?
                    if (userData.password === userData.confirmation) {
                        errors.errorRegistration = ''                               
                    } else {
                        errors.errorRegistration = 'la contraseña y su confirmacion no son iguales'                
                    }
                    /// NO, Ingrese un password valido
                } else {
                    errors.errorPassword ='La contraseña debe incluir letras, numeros y una longitud de entre 6 a 10 caracteres'                    
  
                }
            }
        } else{
             /// NO /// el email no es valido
             errors.errorEmail = 'Ingrese un email valido de hasta 35 caracteres'
        }   
    } else{
        errors.errorEmail ='Ingrese un email'      
    }
    return errors
}

export default validation