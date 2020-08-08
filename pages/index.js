import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ready to Comeback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/adidas-white-logo.png" alt="Adidas Logo" className={styles.logo_main} />
        <h1 className={styles.title}>
          READY TO COMEBACK
        </h1>

        <p className={styles.description}>
          ESTA ES UNA COMPETENCIA, COMO NINGUNA OTRA, NECESITAMOS TU AYUDA PARA PREPARAR A TUS SEGUIDORES PARA REGRESAR A LA NUEVA NORMALIDAD, Y ESTAR EN LA MEJOR CONDICIÓN FÍSICA POSIBLE
        </p>

        <Link href="/mtp">
          <a className={styles.card}>
            <h3>ACEPTO EL RETO</h3>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
