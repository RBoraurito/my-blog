import React from 'react'
import getGlobal from 'helpers/getGlobal'

const error = () => {
  return (
    <main>
    </main>
  )
}

export async function getStaticProps() {
  const globals = getGlobal()

  return {
    props: {
      ...globals
    }
  }
}

export default error
