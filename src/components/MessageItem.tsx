import React from 'react'
import { Message } from '../@types/Message'
import { Avatar, Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { IoCloseOutline } from 'react-icons/io5'

interface MessageProps {
  message: Message
  removeMessage: (id: number) => void
}

const MessageItem: React.FC<MessageProps> = ({ message, removeMessage }) => {
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
      <Flex mb={4} alignItems={'center'} justify={'space-between'}>
        <Flex align={'center'}>
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

        <IconButton
          icon={<IoCloseOutline />}
          variant={'outline'}
          colorScheme={'gray'}
          aria-label={'Emojis'}
          size={'xs'}
          onClick={() => removeMessage(message.id)}
        />
      </Flex>
      <Text>{message.text}</Text>
    </Box>
  )
}

export default MessageItem
