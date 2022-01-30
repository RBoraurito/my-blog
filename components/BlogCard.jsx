import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Heading,
  Text,
  Badge,
  useColorModeValue
} from "@chakra-ui/react";

const BlogCard = ({
  title,
  description,
  image,
  readTime,
  tags,
  createdAt,
  slug
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box
        display="flex"
        flexShrink="0"
        boxShadow="lg"
        alignItems="center"
        px="4"
        py="3"
        mb="6"
        border="1px"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        borderRadius="4"
      >
        <Box as="figure" minW="100px" mr="4">
          <Image src={`/${image}`} width={100} height={100} />
        </Box>
        <Box>
          <Heading color={useColorModeValue('gray.700', 'white')} size="lg" mb="2">
            {title}
          </Heading>
          <Text fontSize="md" color={useColorModeValue('gray.600', 'white')} mb="2" noOfLines={3}>
            {description}
          </Text>
          {tags.map(tag => (
            <Badge
              py={1}
              px={2}
              borderRadius="6"
              mr="2"
              bgColor={useColorModeValue('secondary', 'primary')}
              color="white"
              boxShadow="md"
            >{tag}</Badge>
          ))}
          <Text fontSize="sm" color={useColorModeValue('gray.500', 'white')} mt={2}>
            {createdAt}  |  {readTime} min read.
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default BlogCard;
