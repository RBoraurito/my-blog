import React from 'react';
import {
  Container,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { BlogCard } from "components"

const BlogPosts = ({posts}) => (
  <Container maxW="container.md">
    <Heading
      as="h2"
      size="xl"
      color={useColorModeValue('secondary', 'primary')}
      mb="1"
    >
      My posts
    </Heading>
    <Text fontSize="md" mb="6">
      I like to write about stuff that I find interesting.
    </Text>
    {posts.map(post => (
      <BlogCard
        title={post.title}
        image={post.cardImage}
        description={post.description}
        readTime={post.readTime}
        tags={post.tags}
        createdAt={post.createdAt}
        slug={post.slug}
      />
    ))}
  </Container>
);

export default BlogPosts;
