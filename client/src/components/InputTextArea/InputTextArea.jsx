import styles from './InputTextArea.module.css'
const InputTextArea = ({id, label, value, name, onChange}) => {

    return(
        <div className={styles.container}>
            <label
                className={styles.label}
                htmlFor={id}           
            >{label}</label>
            <textarea
                className={styles.input}
                id={id}
                cols="30"
                rows="10"
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}

export default InputTextArea
