import React from 'react'

const BlogDetailHeader = ({
  image, title, readTime, author, tags, createdAt
}) => {
  return (
    <section className='pt-8 lg:pt-12'>
      <figure className='flex items-center justify-center mb-6 overflow-hidden rounded-md max-h-60'>
        <img src={image} alt="" />
      </figure>
      <h1 className='text-4xl font-bold text-gray-700 lg:text-5xl dark:text-white'>
        {title}
      </h1>
      <hr className='mb-6 border-2 rounded-full border-primary' />
      <div className="mb-8 sm:flex sm:space-x-10">
        <div className="flex items-center space-x-4">
          <a href={author?.contact} target="_blank" title='Contact me'>
            <figure className='overflow-hidden rounded-full w-14 h-14'>
              <img src={author?.image} alt={`${author?.name} avatar`} />
            </figure>
          </a>
          <div className="">
            <a href={author?.contact} target="_blank" title='Contact me'>
              <h3 className='text-base font-semibold text-gray-600 dark:text-white'>
                {author?.name}
              </h3>
            </a>
            <p className='text-sm font-medium text-gray-600 dark:text-white'>
              { createdAt } | {readTime} min read.
            </p>
          </div>
        </div>
        <ul className='flex items-center mt-6 sm:mt-0'>
          {tags.map(tag => (
            <li
              className="px-2 py-1 mr-2 text-sm font-bold text-white shadow-md rounded-xl bg-secondary dark:bg-primary last:mr-0"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <hr className='border rounded-full shadow-lg' />
    </section>
  )
}

export default BlogDetailHeader