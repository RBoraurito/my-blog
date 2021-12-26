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
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
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
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <IconButton 
              size={'md'}
              display={{ base: 'none', md: 'block'}}
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={() => toggleColorMode(!colorMode)}
            />
          </HStack>
          <IconButton 
            size={'md'}
            display={{ base: 'block', md: 'none'}}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={() => toggleColorMode(!colorMode)}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}