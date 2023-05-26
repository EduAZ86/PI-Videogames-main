import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link to='/home'>Home</Link>
            <Link to='/create'>Form</Link>
        </div>
    )
}

export default NavBar