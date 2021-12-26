import { Grid } from '@chakra-ui/react'
import React from 'react'
import { MyHeader, MyFooter } from '.'

const Layout = ({children}) => {
  return (
    <Grid
      templateRows="auto 1fr auto"
      minH="100vh"
    >
      <MyHeader />
      <children />
      <MyFooter />
    </Grid>
  )
}

export default Layout
