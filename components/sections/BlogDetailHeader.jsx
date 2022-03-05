import React from 'react'

const BlogDetailHeader = ({
  image, title, readTime, author, tags, createdAt
}) => {
  return (
    <section className='pt-8 lg:pt-12'>
      <figure className='rounded-md overflow-hidden mb-6 max-h-60 flex items-center justify-center'>
        <img src={image} alt="" />
      </figure>
      <h1 className='text-4xl lg:text-5xl text-gray-700 font-bold dark:text-white'>
        {title}
      </h1>
      <hr className='rounded-full border-2 border-primary mb-6' />
      <div className="sm:flex sm:space-x-10 mb-8">
        <div className="flex space-x-4 items-center">
          <a href={author?.contact} target="_blank" title='Contact me'>
            <figure className='w-14 h-14 rounded-full overflow-hidden'>
              <img src={author?.image} alt={`${author?.name} avatar`} />
            </figure>
          </a>
          <div className="">
            <a href={author?.contact} target="_blank" title='Contact me'>
              <h3 className='text-base font-semibold text-gray-600'>
                {author?.name}
              </h3>
            </a>
            <p className='text-sm text-gray-600 font-medium'>
              { createdAt } | {readTime} min read.
            </p>
          </div>
        </div>
        <ul className='mt-6 sm:mt-0 flex items-center'>
          {tags.map(tag => (
            <li
              className="px-2 py-1 text-white text-sm font-bold rounded-xl shadow-md bg-secondary dark:bg-primary mr-2 last:mr-0"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <hr className='rounded-full border shadow-lg' />
    </section>
  )
}

export default BlogDetailHeader