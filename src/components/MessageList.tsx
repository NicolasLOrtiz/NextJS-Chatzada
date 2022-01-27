import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Message } from '../@types/Message'
import MessageItem from './MessageItem'

type MessageListProps = {
  messages: Message[]
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <Flex
      as={'ul'}
      overflowY={'scroll'}
      direction={'column'}
      flex={1}
      bg={'gray.50'}
      mb={'16px'}
      py={'16px'}
      gap={'sm'}
    >
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Flex>
  )
}

export default MessageList
