import React from 'react'
import { Grid } from '@chakra-ui/react'
import { MyHeader, MyFooter } from '.'

const Layout = ({title, image, social, children}) => {
  return (
    <Grid
      templateRows="auto 1fr auto"
      minH="100vh"
    >
      <MyHeader
        title={title}
        image={image}
      />
        {children}
      <MyFooter
        title={title}
        social={social}
        image={image}
      />
    </Grid>
  )
}

export default Layout
