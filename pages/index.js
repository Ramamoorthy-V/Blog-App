import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lets Write</title>
        <meta name="description" content="Write your thoughts in this platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome Ram Sowmya !</h1>
      
    </div>
  )
}
