import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { customTheme } from '../theme'
import { Layout } from 'components/'

const theme = extendTheme(customTheme)

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
