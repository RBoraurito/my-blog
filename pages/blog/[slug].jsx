import React from 'react'
import DOMPurify from 'isomorphic-dompurify';
import getMany from 'helpers/getMany'
import getGlobal from 'helpers/getGlobal'
import { BlogDetailHeader } from 'components/sections'

const blogDetail = ({post}) => {
  const clean = DOMPurify.sanitize(post.html, {USE_PROFILES: { html: true }});

  return (
    <main className='dark:bg-gray-900'>
      <div className='container'>
        <BlogDetailHeader
          title={post.attributes.title}
          readTime={post.attributes.readTime}
          image={post.attributes.featuredImage}
          author={post.attributes.author}
          tags={post.attributes.tags}
          createdAt={post.attributes.createdAt}
        />
        <section className='py-8 raw-html' dangerouslySetInnerHTML={{ __html: clean }} />
      </div>
    </main>
  )
}

export const getStaticPaths = async () => {
  const paths = await getMany('content/blog')
  const blogPosts = paths.map(path => ({params: {slug: path.replace('.md', '')}}))
  return {
    paths: blogPosts,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const globals = await getGlobal()
  let post
  await import('content/blog/' + params.slug + '.md').then(_post => post = _post.default)
  return {
    props: {
      ...globals,
      post
    }
  }
}

export default blogDetail