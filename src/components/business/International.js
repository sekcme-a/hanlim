import React from "react"
import styles from "styles/business/Nation.module.css"
import Head from 'next/head'

const Nation = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|설립목적,연혁</title>
        <meta name="description" content="(사)대한생활체육회 설립목적 및 연혁 - 스포츠가 최고의 국민건강 복지다" />
        <meta property="og:title" content="대한생활체육회|설립목적,연혁" />
        <meta property="og:description" content="(사)대한생활체육회 설립목적 및 연혁 - 스포츠가 최고의 국민건강 복지다"></meta>
      </Head>
      <h5 className={styles.asdf}></h5>
      <h4 className={styles.title}> </h4>
      <h5 className={styles.subtitle}>가) 일자리 창출</h5>
      <h5 className={styles.asdf}></h5>
      <ul className={styles.list}>
        <li>벤처 창업 지원(벤처기업 발굴/지원, 경영고문 지원사업 등)</li>
        <li>시니어 취업사관학교 운영</li>
        <li>유휴토지 DB구축 및 활용방안</li>
        <li>워킹 딜리버리 사업</li>
      </ul>
      <h4 className={styles.title}> </h4>
            <h5 className={styles.subtitle}>나) 건강증진사업</h5>
            <h5 className={styles.asdf}></h5>
      <ul className={styles.list}>
        <li>건강상담실 운영(치과, 안과, 한방 침술, 통증 클리닉 등)</li>
        <li>무료 의료용품 보급 : 마스크, 손소독제 등</li>
      </ul>
      <h4 className={styles.title}> </h4>
      
            <h5 className={styles.subtitle}>다) 문화/관광/예술, 생활체육 활동사업</h5>
            <h5 className={styles.asdf}></h5>
      <ul className={styles.list}>
        <li>스튜디오 운영</li>
        <li>노인 참여 문화 컨텐츠 개발</li>
        <li>스포츠 동호회 출범</li>
      </ul>
      <h4 className={styles.title}> </h4>
            <h5 className={styles.subtitle}>라) 전국 지방 조직망 구축(17개 지역)</h5>
    </>
  )
}

export default Nation;