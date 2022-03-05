import React from 'react';
import { BlogCard } from "components"

const BlogPosts = ({posts}) => (
  <div className="container">
    <h2 className="mb-1 text-2xl font-semibold lg:text-3xl text-secondary dark:text-primary">
      My posts
    </h2>
    <p className="mb-6 text-base">
      I like to write about stuff that I find interesting.
    </p>
    {posts.map(post => (
      <BlogCard
        title={post.title}
        image={post.cardImage}
        description={post.description}
        readTime={post.readTime}
        tags={post.tags}
        createdAt={post.createdAt}
        slug={post.slug}
        key={post.slug}
      />
    ))}
  </div>
);

export default BlogPosts;
