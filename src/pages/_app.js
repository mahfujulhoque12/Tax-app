import 'bootstrap/dist/css/bootstrap.css'
import Layout from '@/components/Layout/Layout'
import  '../styles/main.scss'
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}