import Head from 'next/head'
import styles from '../styles/Home.module.css'
import{ Button} from "@material-ui/core"
import "./about.jsx"
export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic | Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <h1> DANAN </h1>
      <h3 className="sideHeading">All solution related to share market is here...</h3>
   
     <section>
       <Button href="/home" >Get Started !</Button>
     </section>

      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Danny and Brothers
        {/*   <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
