import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name, setName] = useState('')
  useEffect(() => {
    fetch('/api/hello').then(res => res.json()).then(data => setName(data.name))
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Lets Write</title>
        <meta name="description" content="Write your thoughts in this platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{name}</h1>
      
    </div>
  )
}
