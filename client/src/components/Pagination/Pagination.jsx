import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import CardsContainer from '../CardsContainer/CardContainer'
import styles from './Pagination.module.css'


const ITEMS_FOR_PAGE = 15

const Pagination = () => {

    
    const { videogames } = useSelector((state)=>state)
 
    const  [items, setItems] = useState([...videogames].splice(0, ITEMS_FOR_PAGE))

    const [currentPage, setCurrentPage] = useState(0)
    
        useEffect(()=>{
            setItems([...videogames].splice(0,ITEMS_FOR_PAGE))
        },[videogames])

    /////////////////////////////////////////////////////////////////

    const nextPage = () => {  

        const next_page = currentPage + 1

        const firstIndex = next_page * ITEMS_FOR_PAGE

        if (firstIndex+ITEMS_FOR_PAGE <= videogames.length) {
            setItems([...videogames].splice(firstIndex, ITEMS_FOR_PAGE))    
            setCurrentPage(next_page)            
        } else{
            setItems([...videogames].splice(firstIndex, videogames.length))
            return 
        }        
  
    }

    const previousPage = () => {
        const prev_page = currentPage - 1
        if (prev_page < 0) return
        const firstIndex = prev_page * ITEMS_FOR_PAGE
        setItems([...videogames].splice(firstIndex, ITEMS_FOR_PAGE))
        setCurrentPage(prev_page)
    }


return(
    <CardsContainer
        videogames={videogames}
        items={items}
        nextPage = {nextPage}
        previousPage = {previousPage}
        currentPage = {currentPage}
        ITEMS_FOR_PAGE = {ITEMS_FOR_PAGE}
    />   
   
)

}

export default Pagination