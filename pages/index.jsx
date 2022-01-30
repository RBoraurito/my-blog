import React, {useContext} from 'react'
import { Hero } from 'components/sections'
import { BlogPosts } from 'components/sections'
import getMany from 'helpers/getMany'
import getGlobal from 'helpers/getGlobal'

const home = ({blogPosts}) => {
  return (
    <main>
      <Hero />
      <BlogPosts posts={blogPosts} />
    </main>
  )
}

export async function getStaticProps() {
  const globals = getGlobal()
  const paths = await getMany('content/blog')
  const blogPosts = []
  paths.forEach(path => {
    import('content/blog/' + path)
    .then(module => blogPosts.push(module.attributes))
  })

  return {
    props: {
      blogPosts,
      ...globals
    }
  }
}

export default home
