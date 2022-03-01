import Navbar from '../src/components/Navbar'
import '../styles/globals.css'
import '../styles/components-styles.css'

function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps)
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
