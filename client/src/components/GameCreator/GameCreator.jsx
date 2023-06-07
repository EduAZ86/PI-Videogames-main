import React, { useEffect, useState } from 'react'
import styles from './GameCreator.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGenres, getPlatforms, postVideoGame } from '../../redux/actions'
import DinamicSelect from '../DinamicSelect/DinamicSelect'

const RegExp_URL_image = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif)$/i
const RegExp_date = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
const GameCreator = () => {
    
    const [ form, setForm ] = useState({
        name: '',
        background_image: '',
        background_image_additional:'',
        description_raw:'',
        platforms: [],
        released: '',
        rating: 0,
        genres: [],
        stores: [],
        developers: [],
        tags: [],
        metacritic:0
    })

    const [ errors, setErrors ] = useState({
        name: '',
        background_image: '',
        background_image_additional:'',
        description_raw:'',
        platforms: '',
        released: '',
        rating: '',
        genres: '',
        stores: '',
        developers: '',
        tags: '',
        metacritic:''   
    })

    const allStores = [{name:'Steam'},{name:'Epic Game'},{name:'Xbox'},{name:'Google Play'},{name:'PlayStation Store'},{name:'App Store'},{name:'Nintendo Store'}]

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const allPlatforms = useSelector((state) => state.platforms)
    const allGenres = useSelector((state) => state.genres)
    

    useEffect(() => {
        if(!allGenres.length) dispatch(getGenres())
        if(!allPlatforms.length) dispatch(getPlatforms()) 
    } ,[dispatch,allGenres,allPlatforms])


    const handleChange = (event) => {
        
        const property = event.target.name
        const value = event.target.value
        setForm({ ...form, [property]: value })
        
        if(!errors.length){
            return setErrors({[property]:''})
        }
    }

    const handleSubmit = (event) => {
        console.log(form)
        console.log(form.platforms.length)
        console.log(errors)
     
        event.preventDefault()
        
        if (form.name.trim() === '') {
            return setErrors({...errors, name:'Please enter a name'})
        }

        if (!RegExp_URL_image.test(form.background_image)) {
            return setErrors({...errors, background_image: 'Please put a valid url for a image'})
        }

        if (!RegExp_URL_image.test(form.background_image_additional)) {
            return setErrors({...errors, background_image_additional: 'Please put a valid url for a image'})
        }

        if (form.description_raw.length < 10) {
            return setErrors({...errors, description_raw:'Please enter a description of at least 10 characters'})
        }

        if (form.platforms.length === 0) {
            console.log('platform vacio')
            return setErrors({...errors, platforms: 'Please select at least one platform'})
        }

        if (form.released === "") {
            return setErrors({...errors, released:'Please enter a date'})
        }

        if (form.rating < 1 || form.rating > 5) {
                    return setErrors({...errors, rating:'Please put a rating bethween 1 and 5'})
        }

        if (form.genres.length === 0) {
            return setErrors({...errors, genres: 'Please select at least one genre'})
        }

        if (form.stores.length === 0){
            return setErrors({...errors, stores: 'Please enter at least one store'})
        }

        if (form.developers.length === 0){
            return setErrors({...errors, developers: 'Please enter at least one developer'})
        }

        if (form.tags.length === 0){
            return setErrors({...errors, developers: 'Please enter at least one tag'})
        }

        if (form.metacritic < 0 || form.metacritic > 100) {
            return setErrors({...errors, rating:'Please put a metacritic bethween 0 and 100'})
        }
      
        dispatch(postVideoGame(form))
        navigate('/home')
    }

    const handleReset = (event) =>{
        event.preventDefault()
        setForm({
            name: '',
            background_image: '',
            background_image_additional:'',
            description_raw:'',
            platforms: [],
            released: '',
            rating: 0,
            genres: [],
            stores: [],
            developers: [],
            tags: [],
            metacritic:0

        })
        setDev('')
        setTag('')
        document.getElementById('select-genre').selectedIndex = 0
        document.getElementById('select-platform').selectedIndex = 0
        document.getElementById('select-store').selectedIndex = 0
    }

    
    
    const handleSelect = (optionSelect) => {
        if (optionSelect.id === 'select-genre') {
            const genre = {name: optionSelect.value}           
            setForm({...form, genres: [...form.genres, genre]})           
        }
        if (optionSelect.id === 'select-platform') {
            const platform = {name: optionSelect.value}
            setForm({...form, platforms: [...form.platforms, platform]})
        }
        if (optionSelect.id === 'select-store') {
            const store = {name: optionSelect.value}
            setForm({...form, stores: [...form.stores, store]})
        }
       
    }

    const [ dev, setDev] = useState('')
    const [ tag, setTag] = useState('')

    const handleDev = (event) => {
        event.preventDefault();
        setDev(event.target.value)
    }

    const handleTag = (event) => {
        event.preventDefault();
        setTag(event.target.value)
    }

    const addDev = () => {
        const develo = {name:dev}
        if (dev !== '') {
            setForm({...form, developers: [...form.developers, develo]})            
        }
        setDev('')       
    }

    const addTag = () => {
        const tagg = {name:tag}
        if (tag !== '') {
            setForm({...form, tags: [...form.tags, tagg]})            
        }
        setTag('')
    }
console.log();

    return (
        <form  onSubmit={(event) => handleSubmit(event)} onReset={(event) => handleReset(event)} className={styles.container}>
            
            
            <div className={styles.name}>
                <label htmlFor="name" className={styles.label}>Name: </label>
                <input type="text" id='name' value={form.name} name='name' onChange={(event) => handleChange(event)} className={styles.inputname}/>
                <p className={styles.error}>{errors.name}</p>
            </div>

            <div className={styles.image1}>
              <label htmlFor="image"className={styles.label}>Image 1: </label>
              <input type="text" id='image' value={form.background_image} name='background_image' onChange={(event) => handleChange(event)} className={styles.inputtext}/>
              <p className={styles.error}>{ errors.background_image}</p>
            </div>

            <div className={styles.image2}>
              <label htmlFor="image2" className={styles.label}>Image 2: </label>
              <input type="text" id='image2' value={form.background_image_additional} name='background_image_additional' onChange={(event) => handleChange(event)} className={styles.inputtext}/>
              <p className={styles.error}>{ errors.background_image}</p>
            </div>

            <div className={styles.description}>
               <label htmlFor="description" className={styles.label}>Description: </label>
               <textarea id="description" cols="30" rows="10" value={form.description_raw} name='description_raw' onChange={(event) => handleChange(event)} className={styles.textarea}/>
               <p className={styles.error}>{errors.description}</p>
            </div>

            <div className={styles.released}>
                <label htmlFor="released" className={styles.label}>Released: </label>
               <input type="date" id="released" value={form.released} name='released' onChange={(event) => handleChange(event)} className={styles.input}/>
               <p className={styles.error}>{ errors.released}</p>
            </div>

            <div className={styles.rating}>
               <label htmlFor="rating" className={styles.label}>Rating: </label>
               <input type="range" id="rating" value={form.rating} name='rating' onChange={(event) => handleChange(event)} min='0' step='0.5' max='5' className={styles.input}/>
               <span>{form.rating}</span>
               <p className={styles.error}>{errors.rating}</p>
            </div>

            <div className={styles.metacritic}>
               <label htmlFor="metacritic" className={styles.label}>metacritic: </label>
               <input type="range" id="metacritic" value={form.metacritic} name='metacritic' onChange={(event) => handleChange(event)} min='0' step='1' max='100' className={styles.input}/>
               <span>{form.metacritic}</span>
               <p className={styles.error}>{errors.metacritic}</p>
            </div>

            <div className={styles.selects}>
                <DinamicSelect title='genre' handleSelect={handleSelect} options={allGenres} />
                <DinamicSelect title='platform' handleSelect={handleSelect} options={allPlatforms}/>
                <DinamicSelect title='store' handleSelect={handleSelect} options={allStores}/>
            </div>


            <div className={styles.developersytag}>
                <label htmlFor="developers" className={styles.label}>Developers: </label>
                <input type="text" id="developers" value={dev} name='developers' onChange={(event) => handleDev(event)} className={styles.inputdev}/>
                
                <button className={styles.buttondev} type="button" onClick={() => addDev(dev)} >{dev}     ✔ ADD</button>
                <p className={styles.error}>{errors.developers}</p>
                <label htmlFor="tags" className={styles.label}>Tags: </label>
                <input type="text" id="tags" value={tag} name='developers' onChange={(event) => handleTag(event)} className={styles.inputtag}/>
               
                <button className={styles.buttontag} type="button" onClick={() => addTag(tag)} >{tag}      ✔ ADD</button>
                <p className={styles.error}>{errors.tags}</p>
            </div>

          
          

           
            <div className={styles.buttons}>
                <input type="submit" value="Create Game" className={styles.buttons} />
                <input type="reset" value="Reset Form" className={styles.buttons} />
            </div>



        </form>
    )

}

export default GameCreator