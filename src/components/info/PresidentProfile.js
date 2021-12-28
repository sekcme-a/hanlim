import React from "react"
import Image from "next/image"
import styles from "styles/info/Greet.module.css"
import Head from 'next/head'

const Greet = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|회장 프로필</title>
        <meta name="description" content="(사)대한생활체육회 총재 김균식 총재 인삿말 - 어게인 필승 코리아!!" />
        <meta property="og:title" content="대한생활체육회|총재인삿말" />
        <meta property="og:description" content="(사)대한생활체육회 총재 김균식 총재 인삿말 - 어게인 필승 코리아!!"></meta>
      </Head>
      <div className={styles.greetContent}>
        <div className={styles.img}>
          <Image
                src="/rlarbstlr.png"
                height={210}
                width={180}
                alt="회장 프로필"
          />
        </div>
      </div>
    </>
  )
}

export default Greet;