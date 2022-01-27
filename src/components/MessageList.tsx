import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Message } from '../@types/Message'
import MessageItem from './MessageItem'

type MessageListProps = {
  messages: Message[]
  removeMessage: (id: number) => void
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  removeMessage,
}) => {
  if (messages.length === 0) {
    return (
      <Flex align={'center'} justify={'center'} flex={1}>
        <Heading
          as={'h1'}
          bgGradient="linear(to-l, green.500, orange.500)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
        >
          Nenhuma messagem recebida
        </Heading>
      </Flex>
    )
  }

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
        <MessageItem
          key={message.id}
          message={message}
          removeMessage={removeMessage}
        />
      ))}
    </Flex>
  )
}

export default MessageList
