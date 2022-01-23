import React, {useContext} from 'react'
import { Hero } from 'components/home'
import getMany from 'helpers/getMany'

const home = () => {
  return (
    <main>
      <Hero />
    </main>
  )
}

export async function getStaticProps() {

  const paths = await getMany('content/blog')
  const blogPosts = []
  paths.forEach(path => {
    import('content/blog/' + path)
    .then(module => blogPosts.push(module))
  })
  return {
    props: {
      blogPosts
    }
  }
}

export default home
