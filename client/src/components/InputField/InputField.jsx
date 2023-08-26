import styles from './InputField.module.css'
const InputField = ({label, name, placeholder, type, value, onChange}) => {

    return(
        <div className={styles.container}>
            <label 
                className={styles.label}
                htmlFor={name}
                >{label}</label>
            <input  
                className={styles.input}
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
               />
        </div>
    )
}

export default InputField