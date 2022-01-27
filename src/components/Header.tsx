import React from 'react'
import { Flex, Heading, IconButton } from '@chakra-ui/react'
import { IoLogOutOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <Flex w={'100%'} mb={'16px'} align={'center'} justify={'space-between'}>
      <Heading
        as={'h1'}
        bgGradient="linear(to-l, pink.500, orange.500)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="bold"
      >
        Chat
      </Heading>
      <IconButton
        icon={<IoLogOutOutline />}
        variant={'outline'}
        colorScheme={'blue'}
        aria-label={'Logout'}
      />
    </Flex>
  )
}

export default Header
