import { useDispatch } from "react-redux"
import { useEffect } from "react"
import React from 'react'
import { Link } from 'react-router-dom'
import { getVideoGames } from "../../redux/actions"

const Landing = ()=>{
    
    const dispatch = useDispatch ()

    useEffect (() => {
        dispatch(getVideoGames())
    },[])

    return (
        <div>
            <h1>Landing page</h1>
            <Link to='/home'>Home</Link>

        </div>
    )

}

export default Landing