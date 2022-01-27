import React from 'react'
import { Message } from '../@types/Message'
import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'

interface MessageProps {
  message: Message
}

const MessageItem: React.FC<MessageProps> = ({ message }) => {
  return (
    <Box
      key={message.id}
      as={'li'}
      borderRadius={'md'}
      p={'6px'}
      mb={'12px'}
      bg={'gray.50'}
      border={'1px solid'}
      borderColor={'orange.500'}
      px={4}
      py={4}
      _hover={{
        bg: 'gray.100',
      }}
    >
      <Flex mb={4} alignItems={'center'}>
        <Avatar
          name={message.user}
          src={`https://github.com/${message.user}.png`}
          size={'sm'}
          mr={'8px'}
        />
        <Heading as={'h4'} size={'sm'}>
          {message.user}
        </Heading>
        <Text as={'span'} fontSize={'xs'} ml={'8px'} color={'gray.500'}>
          {message.createdAt}
        </Text>
      </Flex>
      <Text>{message.text}</Text>
    </Box>
  )
}

export default MessageItem
