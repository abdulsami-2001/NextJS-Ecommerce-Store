import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import StoreState from '../Context/Store/StoreState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StoreState>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </StoreState>
    </>
  )
}

export default MyApp
