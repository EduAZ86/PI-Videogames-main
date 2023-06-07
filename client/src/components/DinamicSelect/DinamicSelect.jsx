import { useState } from 'react'
import styles from './DinamicSelect.module.css'
const DinamicSelect = (props) => {
    
    const { title, handleSelect, options } = props
    
        const options_name = options.map((opti)=>opti.name)
    
        let id = `select-${title}`
        let label = title

    const [ optionSelect, setOptionSelect ]  = useState({value:'', id:''})
    
    const handleOption = (value, id) => {
        setOptionSelect({value: value, id: id})
    }

    const reset = (event) => {
        
        setOptionSelect({value:'', id:''})
    }

    return(
    <div className={styles.container}>        
        <label  className={styles.label} htmlFor={id}>{label} </label>
        <select  className={styles.select}  name={id} id={id} onChange={(event) => handleOption(event.target.value, event.target.id)} >
            <option  className={styles.option}  value="">Select a {title}</option>
            {options_name.map((opt) => <option value={opt}>{opt}</option>)}
        </select>
        <span  className={styles.span}  >{optionSelect.value}</span>
        <button  className={styles.button}  type="button" onClick={() => {
            handleSelect(optionSelect)
            reset()}}>add</button>
    </div>
    )

}

export default DinamicSelect