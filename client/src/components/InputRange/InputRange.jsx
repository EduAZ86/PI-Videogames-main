import styles from './InputRange.module.css'
const InputRange = ({name, label, value, onChange, min, step, max}) => {

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <label 
                    className={styles.label}
                    htmlFor={name}
                    >{label}</label>
                 <span 
                    className={styles.span}
                    >{value}</span>
            </div>
            <input 
                className={styles.input}
                type="range" 
                id={name} 
                value={value} 
                name={name}
                onChange={onChange} 
                min={min}
                step={step}
                max={max} 
                />
    </div>
    )
}

export default InputRange