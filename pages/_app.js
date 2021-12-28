import '../styles/globals.css'
import 'styles/navbar.css'
import 'styles/Dropdown.css'
import 'styles/HomeHeader.css'
import 'styles/About.css'
import 'styles/Footer.css'
import 'styles/Container.css'
import Navbar from "src/components/public/Navbar"
import Footer from "src/components/home/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
