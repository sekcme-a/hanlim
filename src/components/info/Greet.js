import React from "react"
import Image from "next/image"
import styles from "styles/info/Greet.module.css"
import Head from 'next/head'

const Greet = () => {
  return (
    <>
      <Head>
        <title>대한생활체육회|총재인삿말</title>
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
                alt="회장 사진"
          />
        </div>
        <p className={styles.a}>(사)벤처한림회</p>
        <p className={styles.b}>회장 ㅁㅁㅁ</p>
        <div className={styles.greetText}>
          <h4>안녕하십니까 여러분</h4>
          벤처한림회 회장 인사말 작성<br /><br />
          (사)벤처 한림회(이사장 조완규)는 지난 6일 헌정회관에서 각계 인사가 발기인으로 참여한 가운데 창립총회를 가졌다고 밝혔다.<br /><br />
급속한 노령화 시대의 빈곤, 노인일자리 창출 등에 대한 해결책을 스스로 찾기 위한 사단법인 벤처한림회가 결성되었다.<br /><br />
벤처한림회는 정부나 정치권이 미처 생각지 못한 노령화 사회의 문제를 스스로의 삶의 경험과 지혜를 활용해 개척하는 적극적 관점의 노령화 사회문제 해결을 위한 돌파구를 찾기 위해 결성되었다. 수많은 움직이는 도서관, 회원들이 자발적으로 노장청 융복합 벤처에 청장년들을 주주와 파트너로 참여시켜 일등 창업국가로 만들려고 한다. 이리되면 청년들이 대학교육을 받지 않아도 벤처한림회 멘토와 실질적인 민간 벤처전문 경제단체를 창립한 것이다.<br /><br />
서울대 총장, 교육부 장관을 역임한 조완규 벤처한림회 발기인 대표(이사장)는 “청년 고용, 청년 일자리 창출에 매몰되어 뒤로 밀려나고 있는 노령화 사회의 문제를 스스로 해결하기 위해 삶의 경험과 지식, 지혜로 다져진 노령인들이 중심이 되어 노장청의 공통문제를 융합적으로 해결하는 벤처한림회를 설립한 것”이라 말했다.<br /><br />
벤처한림회의 발기인 박주철 사무총장은 “이번에 출범하는 (사)벤처한림회는 스타트업, 벤처 창업지원, 노인소득, 일자리 문제, 치매예방과 세대간 소통, 고독사문제를 해결할 다양한 창업 아이템을 개발해 노장청 공동 스타트업으로 발전시킬 계획입니다. 노익장의 지혜와 경험을 활용한 유니콘 기업으로 성장시킬 융복합 벤처기업 경제 직능단체의 임무를 수행하겠습니다. 노인일자리와 소득창출을 위한 긱이코노미(Gig Economy) 1인기업 온라인 플랫폼에 적극 참여하는 벤처인으로, 뒤로 물러나는 세대가 아니라 앞장서서 길을 밝히는 세대라는 취지에 공감하는 많은 분들의 참여를 환영합니다.” 라고 향후 계획을 밝혔다.

<br /><br />
        </div>
      </div>
    </>
  )
}

export default Greet;