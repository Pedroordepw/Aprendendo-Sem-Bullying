import React from 'react'
import styles from '../src/app/Conteudo.module.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS


const Conteudo = () => {
  return (
      <div className='container'>
        <div className='row'>
          <div className={`${styles.conteudo} col md`}>
            <h1>Você sabe o que é Bullying?</h1>
            <p>O bullying é um comportamento repetitivo e prejudicial, que envolve o uso de poder desigual para intimidar, ameaçar, assediar ou causar danos emocionais, físicos ou psicológicos a outra pessoa. Geralmente, o bullying ocorre em um contexto de desequilíbrio de poder, em que uma pessoa ou grupo busca exercer controle e dominância sobre outra pessoa mais vulnerável. O objetivo do bullying é causar sofrimento à vítima, e pode ocorrer em diversas formas, incluindo verbal, física, psicológica, social e, mais recentemente, online (cyberbullying).
            </p>
            <p>
            É importante enfatizar que o bullying é um comportamento prejudicial e inaceitável que deve ser combatido com conscientização, prevenção e apoio às vítimas. Colocar uma definição clara de bullying no início do seu site é uma ótima maneira de educar os visitantes e enfatizar a importância de combater essa prática.      
            </p>
          </div>
          <div className={`${styles.conteudo} col md d-flex justify-content-center align-items-center`}>
            <img src="kids.png"  alt="Kids" />
          </div>
        </div>
      </div>
  )
}

export default Conteudo