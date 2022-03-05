import { Layout } from 'components/'
import 'styles/globals.css'


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout
        title={pageProps.title}
        image={pageProps.image}
        social={pageProps.social}
        navigation={pageProps.navigation}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
