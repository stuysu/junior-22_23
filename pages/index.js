import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavBar from "../components/common/NavBar";

// stop navbar from rerendering after page change.
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Junior Caucus</title>
      </Head>
      <NavBar /> 
      Temp Home
      
    </div>
  )
}
