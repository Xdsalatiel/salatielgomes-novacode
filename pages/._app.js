import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function MyApp({ Component, pageProps }){
  return (
    <div className="min-h-screen">
      <div className="container">
        <Header />
        <main className="mt-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
