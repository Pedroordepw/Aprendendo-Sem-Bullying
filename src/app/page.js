import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Conteudo from '../../components/Conteudo'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS


export default function Home() {
  return (
    <div>
      <title>Aprendendo Sem Bullying</title>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  )
}
