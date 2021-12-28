import React from "react"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2 className="about-about">ABOUT</h2>
        <h3>노인일자리와 소득창출을 위한 노장청 공동스타트업</h3>
      </div>
      <div className="about-content">
        <Link href="/info/greet" >
          <div className="about-table">
            <div className="about-img">
              <Image
              src="/rlarbstlr.png"
                height={190}
                width={155}
                alt="회장 인사말"
              />
            </div>
            <h4>회장인사말</h4>
            <p>노장청 공동스타트업<br/>벤처한림회 회장의 인삿말 보러가기</p>
          </div>
        </Link>

        <Link href="/info/chart" >
          <div className="about-table">
            <div className="about-img">
              <Image
              src="/business-people.jpg"
                height={160}
                width={250}
                alt="총재 김균식"
              />
            </div>
            <h4>중앙조직도</h4>
            <p>벤처한림회의<br/>중앙 조직도 보러가기</p>
          </div>
        </Link>

        <Link href="/info/status" >
        <div className="about-table">
          <div className="about-img">
            <Image
            src="/people.jpg"
              height={160}
              width={250}
              alt="총재 김균식"
            />
          </div>
          <h4>임원현황</h4>
          <p>벤처한림회를<br/>운영하는 임원단 현황 보러가기</p>
        </div>
        </Link>

        <Link href="/info/where" >
        <div className="about-table">
          <div className="about-img">
            <Image
            src="/map.png"
              height={160}
              width={220}
              alt="총재 김균식"
            />
          </div>
          <h4>오시는 길</h4>
          <p>벤처한림회로<br/>오시는 길 보러가기</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default About;