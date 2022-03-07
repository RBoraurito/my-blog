import React, { useEffect } from 'react'
import { Layout } from 'components/'
import 'styles/globals.css'


const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    if(isDark.matches) {
      document.querySelector('html').classList.add('dark')
      return
    }
    document.querySelector('html').classList.add('light')
  },[])
  
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
