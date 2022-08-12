import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
