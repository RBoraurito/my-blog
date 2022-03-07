import React from 'react'
import { MyHeader, MyFooter } from '.'

const Layout = ({title, image, social, navigation, children}) => {

  return (
    <>
      <div
        className="grid min-h-screen layout"
      >
        <MyHeader
          title={title}
          image={image}
          navigation={navigation}
        />
          {children}
        <MyFooter
          title={title}
          social={social}
          image={image}
        />
      </div>
      <style jsx>{`
        .layout {
          grid-template-rows: auto 1fr auto;
        }
      `}</style>
    </>
  )
}

export default Layout
