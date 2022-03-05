import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({
  title,
  description,
  image,
  readTime,
  tags,
  createdAt,
  slug,
}) => {
  const formattedSlug = slug.replace('.md', '')
  return (
    <div className="flex items-center flex-shrink-0 px-4 py-3 mb-6 border border-gray-100 rounded-md shadow-lg dark:border-gray-700">
      <Link href={`/blog/${encodeURIComponent(formattedSlug)}`} passHref>
        <a>
          <figure className='min-w-[100px] mr-4 rounded-md overflow-hidden'>
            <Image src={image} width={100} height={100} />
          </figure>
        </a>
      </Link>
      <div>
        <Link href={`/blog/${encodeURIComponent(formattedSlug)}`} passHref>
          <a>
            <h3 className='mb-2 text-2xl text-gray-700 dark:text-white'>
              {title}
            </h3>
          </a>
        </Link>
        <p className='mb-2 text-gray-600 text-md dark:text-white line-clamp-3'>
          {description}
        </p>
        {tags.map(tag => (
          <span
            className="px-2 py-1 mr-2 text-white text-sm font-bold rounded-xl shadow-md bg-secondary dark:bg-primary"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <p className="mt-2 text-sm text-gray-500 dark:text-white">
          {createdAt}  |  {readTime} min read.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
