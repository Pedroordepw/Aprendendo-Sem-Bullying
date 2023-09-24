import React from 'react'
import styles from '../src/app/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
            <img src="logo_project.png" alt="Logo Aprendendo Sem Bullying" />
        </div>

        <div>
            <img src="ifrs.png" alt="Logo IFSul" />
        </div>

        <div>
            <ul>
                <li><a href="">@2023 Aprendendo Sem Bullying</a>
                </li>
                <li><a href="">Sobre Nós</a></li>
                <li><a href="">Política de Privacidade</a></li>
            </ul>
        </div>


    </div>
  )
}

export default Footer