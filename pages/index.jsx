import React, {useContext} from 'react'
import { Hero } from 'components/home'
import { BlogPosts } from 'components/sections'
import getMany from 'helpers/getMany'

const home = ({blogPosts}) => {
  return (
    <main>
      <Hero />
      <BlogPosts posts={blogPosts} />
    </main>
  )
}

export async function getStaticProps() {

  const paths = await getMany('content/blog')
  const blogPosts = []
  paths.forEach(path => {
    import('content/blog/' + path)
    .then(module => blogPosts.push(module.attributes))
  })

  return {
    props: {
      blogPosts
    }
  }
}

export default home
