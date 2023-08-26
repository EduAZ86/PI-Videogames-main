import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import CardsContainer from '../CardsContainer/CardContainer'
import React from 'react'
import styles from './Pagination.module.css'
const Pagination = () => {
       
    const { videogames, order } = useSelector((state)=>state)
    const ITEMS_FOR_PAGE = 15
    const last_page = Math.ceil(videogames.length/ITEMS_FOR_PAGE)
    const pages = []
    
    
    /////////////////////////////////////////////
    const pagesHandler = () => {
        pages.push(videogames.slice(0, ITEMS_FOR_PAGE)) 
        for (let i = 1; i < last_page-1; i++) {
            const firstIndex_nextPage = i * ITEMS_FOR_PAGE  
            pages.push(videogames.slice(firstIndex_nextPage, firstIndex_nextPage + ITEMS_FOR_PAGE))        
        }
        pages.push(videogames.slice((last_page-1) * ITEMS_FOR_PAGE))
        
        return pages
    }
    /////////////////////////////////////////////
    pagesHandler()
    
    const  [items, setItems] = useState(pages[0])
    
    const [currentPage, setCurrentPage] = useState(0)
    
    useEffect(()=>{   
        pagesHandler()
        setCurrentPage(0)              
        setItems(pages[currentPage])
    },[order])

    useEffect(()=>{
        pagesHandler()
        if (videogames.length < ITEMS_FOR_PAGE) {
            setItems(videogames.slice(0))
        } else{
            setCurrentPage(0)
        }
    },[videogames])
    
    useEffect(()=>{
        setItems(pages[currentPage])
    },[currentPage])    
   
    const nextPage = () => {
        if (currentPage <(last_page-1)) {
            setCurrentPage(currentPage+1)
        }
    }
    const previousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage-1)
        }
    }
return(
    <CardsContainer
        videogames={videogames}
        items={items}
        nextPage = {nextPage}
        previousPage = {previousPage}      
        currentPage = {currentPage+1}     
        last_page ={last_page-1}
    /> 
)
}
export default Pagination

