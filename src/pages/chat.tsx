import React, { useState } from 'react'
import { Flex, IconButton, Input } from '@chakra-ui/react'
import { IoHappyOutline, IoSendOutline } from 'react-icons/io5'
import Header from '../components/Header'
import MessageList from '../components/MessageList'
import { Message } from '../@types/Message'
import { SubmitHandler, useForm } from 'react-hook-form'

const mockMessages: Message[] = [
  {
    id: 1,
    user: 'João',
    text: 'Hello, how are you?',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    user: 'NicolasLOrtiz',
    text: 'I am fine, thank you!',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    user: 'João',
    text: 'How are you?',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    user: 'NicolasLOrtiz',
    text: 'I am fine, thank you!',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 5,
    user: 'João',
    text: 'How are you?',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 6,
    user: 'NicolasLOrtiz',
    text: 'I am fine, thank you!',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 7,
    user: 'João',
    text: 'How are you?',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 8,
    user: 'NicolasLOrtiz',
    text: 'I am fine, thank you!',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 9,
    user: 'João',
    text: 'How are you?',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 10,
    user: 'NicolasLOrtiz',
    text: 'I am fine, thank you!',
    createdAt: '2020-01-01T00:00:00.000Z',
  },
]

interface FormData {
  message: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (values) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        user: 'João',
        text: values.message,
        createdAt: new Date().toISOString(),
      },
    ])
  }

  return (
    <Flex justify={'center'} align={'center'} h={'100vh'}>
      <Flex
        direction={'column'}
        flex={1}
        boxShadow={'0px 2px 10px rgba(0, 0, 0, 0.2)'}
        borderRadius={'md'}
        bg={'white'}
        height={'100%'}
        maxW={'95%'}
        maxH={'95vh'}
        p={'32px'}
      >
        <Header />

        <MessageList messages={messages} />

        <Flex align={'center'} gap={'8px'}>
          <Input
            type="textarea"
            border={'1px solid'}
            borderColor={'pink.500'}
            borderRadius={'md'}
            placeholder="Digite uma mensagem"
            {...register('message')}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(onSubmit)
              }
            }}
          />
          <IconButton
            icon={<IoSendOutline />}
            variant={'outline'}
            colorScheme={'orange'}
            aria-label={'Send'}
            onClick={handleSubmit(onSubmit)}
          />
          <IconButton
            icon={<IoHappyOutline />}
            variant={'outline'}
            colorScheme={'yellow'}
            aria-label={'Emojis'}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Chat
