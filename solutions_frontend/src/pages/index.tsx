import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { Services } from '../components/Site/services/services'
import { Slogan } from '../components/Site/slogan/slogan'
import {Navigate} from '../components/Site/navigate/navigate'


//style="background-image: url('/images/revolution/template_revolution/space.jpg');"
const Home: NextPage = () => {
  return (
    //<div className={styles.container}>
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />

      </Head>
      <Navigate/>
      <Slogan />


      <Services />




    </>
  )
}

export default Home
