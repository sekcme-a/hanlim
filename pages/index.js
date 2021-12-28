import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from "src/components/home/HomeHeader"
import About from "src/components/home/About"
import Footer from "src/components/home/Footer"


export default function Home() {
  return (
    <div>
      <HomeHeader />
      <About />
    </div>
  )
}
