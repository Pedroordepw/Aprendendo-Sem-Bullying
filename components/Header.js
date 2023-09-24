import React from 'react'
import styles from '../src/app/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src="logo_project.png" alt="Logo" />
        </div>

        <div>
            <ul>
                <li><a href="">INÍCIO</a></li>
                <li><a href="">TIPOS</a></li>
                <li><a href="">SINAIS</a></li>
                <li><a href="">EFEITOS</a></li>
                <li><a href="">PREVENÇÃO</a></li>
                <li><a href="">LEGISLAÇÃO</a></li>
                <li><a href="">INTERVENÇÃO</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header