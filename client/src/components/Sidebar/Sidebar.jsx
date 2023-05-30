import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
const Sidebar = () => {
    return <div>
            <Link to='/home'>Home</Link>
            <Link to='/create'>Form</Link>
    </div>
}

export default Sidebar