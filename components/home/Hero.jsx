import {
  Box,
  Text,
  Link,
  Stack,
  Heading,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import React from 'react'

import { SocialButton } from '..'

const Hero = () => {
  return (
    <Container
      as="section"
      alignItems="center"
      maxW="container.lg"
      my={10}
    >
      <Grid
        templateColumns={{ sm: 'repeat(3, 1fr)'}}
        alignItems="center"
        gap={8}
      >
        <GridItem colSpan={{sm:2}}>
          <Heading
            as="h1"
            color={useColorModeValue('primary', 'white')}
            mb={4}
          >
            Hi, I'm Ricardo Boraure.
          </Heading>
          <Text
            fontSize="lg"
            color={useColorModeValue('gray.900', 'gray.100')}
            mb={4}
          >
            I'm software developer especiliy focused on <strong>frontend(Vue & React)</strong>. I'm from Barquisimeto, Venezuela, but currently living in the Santo Domingo, Dominican Republic. I'm a self-taught developer, and I'm always looking for new challenges and opportunities. 
            <NextLink href="/about">
              <Link color="primary"> See more</Link>
            </NextLink>
          </Text>
          <Text
            fontSize="lg"
            color={useColorModeValue('gray.900', 'gray.100')}
            fontWeight={600}
            mb={4}
          >
            You can find me at the following social networks:
          </Text>

          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Github'} href={'#'}>
              <FaGithub />
            </SocialButton>
          </Stack>
        </GridItem>
        <GridItem
          borderRadius={'full'}
          overflow="hidden"
          maxH={{base: '200px' ,sm: '300px'}}
          maxW={{base: '200px' ,sm: '300px'}}
          order={{base: -1, sm: 0}}
          mx="auto"
        >
          <Image src="/img/me.jpeg" width={300} height={300} />
        </GridItem>
      </Grid>

    </Container>
  )
}

export default Hero
