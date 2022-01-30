import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Text,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';

const NavLink = ({ url, children }) => (
  <NextLink href={url}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.500'),
      }}
      _active={{
        border: 'primary',
        borderWidth: '2px',
      }}
    >
      {children}
    </Link>
  </NextLink>
);

const links = [
  {
    url: '/about',
    label: 'About',
  },
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/projects',
    label: 'Projects',
  },

]

export default function MyHeader({
  title,
  image
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      px={4}
      boxShadow="md"
      borderWidth={useColorModeValue('0', '2px')}
      borderBottom={useColorModeValue('', 'gray.200')}
    >
      <Container maxW='container.lg'>
        <Flex w='full' h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}
            justifyContent={{ base: 'center', md:'space-between' }}
            w='full'
          >
            <NextLink href="/">
              <Flex align="center">
                <Box as="figure" borderRadius="full" overflow="hidden" h="36px" w="36px">
                  <Image
                    src={`/${image}`}
                    width={36}
                    height={36}
                  />
                </Box>
                <Text as="p" fontSize="xl" color={useColorModeValue('secondary', 'primary')} ml={2} fontWeight={700}>
                  {title}
                </Text>
              </Flex>
            </NextLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.label} url={link.url}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
            <IconButton 
              size={'md'}
              display={{ base: 'none', md: 'block'}}
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              bgColor={colorMode === 'dark' ? 'yellow.400' : 'gray.500'}
              color={colorMode === 'dark' ? 'black' : 'white'}
              onClick={() => toggleColorMode(!colorMode)}
            />
          </HStack>
          <IconButton 
            size={'md'}
            display={{ base: 'block', md: 'none'}}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            bgColor={colorMode === 'dark' ? 'yellow.400' : 'gray.500'}
            color={colorMode === 'dark' ? 'black' : 'white'}
            onClick={() => toggleColorMode(!colorMode)}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.label} url={link.url}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
