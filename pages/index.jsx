import React, {useContext} from 'react'
import { Hero } from 'components/sections'
import { BlogPosts } from 'components/sections'
import getMany from 'helpers/getMany'
import getGlobal from 'helpers/getGlobal'

const home = ({blogPosts, social}) => {
  return (
    <main className="dark:bg-gray-900">
      <Hero social={social} />
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
    .then(module => blogPosts.push({...module.attributes, slug: path}))
  })

  return {
    props: {
      blogPosts,
      ...globals
    }
  }
}

export default home
