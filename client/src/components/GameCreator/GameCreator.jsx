import React, { useEffect, useState } from 'react'
import styles from './GameCreator.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGenres, getPlatforms, postVideoGame } from '../../redux/actions'
import DinamicSelect from '../DinamicSelect/DinamicSelect'

const RegExp_URL_image = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/g
const RegExp_date = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
const GameCreator = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const allPlatforms = useSelector((state) => state.platforms)
    const allGenres = useSelector((state) => state.genres)
    const allStores = [{name:'Steam'},{name:'Epic Game'},{name:'Xbox'},{name:'Google Play'},{name:'PlayStation Store'},{name:'App Store'},{name:'Nintendo Store'}]


    useEffect(() => {
        if(!allGenres.length) dispatch(getGenres())
        if(!allPlatforms.length) dispatch(getPlatforms()) 
    } ,[dispatch,allGenres,allPlatforms])


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

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setForm({ ...form, [property]: value })
        
        if(!errors.length) return setErrors({[property]:''})               
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (form.name.length < 2) {
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
            return setErrors({...errors, platforms: 'Please select at least one platform'})
        }

        if (!RegExp_date.test(form.released)) {
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

        // dispatch(postVideoGame(form))
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
            console.log(form)
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
        setDev(event.target.value)
    }

    const handleTag = (event) => {
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


    return (
        <form  onSubmit={(event) => handleSubmit(event)} onReset={(event) => handleReset(event)} className={styles.container}>

            
            <div className={styles.field}>
                <input type="text" id='name' value={form.name} name='name' onChange={(event) => handleChange(event)} className={styles.inputtext}/>
                <label htmlFor="name" className={styles.labeltext}>Name: </label>
                <p className={styles.error}>{errors.name}</p>
            </div>

            <div className={styles.field}>
              <input type="text" id='image' value={form.background_image} name='background_image' onChange={(event) => handleChange(event)} className={styles.inputtext}/>
              <label htmlFor="image" className={styles.labeltext}>Image: </label>
              <p className={styles.error}>{ errors.background_image}</p>
            </div>

            <div className={styles.field}>
              <input type="text" id='image2' value={form.background_image_additional} name='background_image_additional' onChange={(event) => handleChange(event)} className={styles.inputtext}/>
              <label htmlFor="image2" className={styles.labeltext}>Image 2: </label>
              <p className={styles.error}>{ errors.background_image}</p>
            </div>

            <div className={styles.textareaContainer}>
               <label htmlFor="description" className={styles.label}>Description: </label>
               <textarea id="description" cols="30" rows="10" value={form.description_raw} name='description_raw' onChange={(event) => handleChange(event)} className={styles.textarea}/>
               <p className={styles.error}>{errors.description}</p>
            </div>

            <div>
                <label htmlFor="released" className={styles.label}>Released: </label>
               <input type="date" id="released" value={form.released} name='released' onChange={(event) => handleChange(event)} className={styles.input}/>
               <p className={styles.error}>{ errors.released}</p>
            </div>

            <div>
               <label htmlFor="rating" className={styles.labelCb}>Rating: </label>
               <input type="range" id="rating" value={form.rating} name='rating' onChange={(event) => handleChange(event)} min='0' step='0.5' max='5' className={styles.input}/>
               <span>{form.rating}</span>
               <p className={styles.error}>{errors.rating}</p>
            </div>

            <div>
               <label htmlFor="metacritic" className={styles.labelCb}>metacritic: </label>
               <input type="range" id="metacritic" value={form.metacritic} name='metacritic' onChange={(event) => handleChange(event)} min='0' step='1' max='100' className={styles.input}/>
               <span>{form.metacritic}</span>
               <p className={styles.error}>{errors.metacritic}</p>
            </div>

            <div>
                <DinamicSelect title='genre' handleSelect={handleSelect} options={allGenres} />
                <DinamicSelect title='platform' handleSelect={handleSelect} options={allPlatforms}/>
                <DinamicSelect title='store' handleSelect={handleSelect} options={allStores}/>
            </div>


            <div>
                <label htmlFor="developers" className={styles.labelCb}>developers: </label>
                <input type="text" id="developers" value={dev} name='developers' onChange={(event) => handleDev(event)} className={styles.input}/>
                <span>{dev}</span>
                <button  onClick={() => addDev(dev)} >add</button>
                <p className={styles.error}>{errors.developers}</p>
            </div>

            <div>
                <label htmlFor="tags" className={styles.labelCb}>tags: </label>
                <input type="text" id="tags" value={tag} name='developers' onChange={(event) => handleTag(event)} className={styles.input}/>
                <span>{tag}</span>
                <button  onClick={() => addTag(tag)} >add</button>
                <p className={styles.error}>{errors.tags}</p>
            </div>

           

            <input type="submit" value="Create Game" className={styles.buttons} />
            <input type="reset" value="Reset Form" className={styles.buttons} />



        </form>
    )

}

export default GameCreator