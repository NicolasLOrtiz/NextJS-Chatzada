import { Flex, Image, Link, Text } from '@chakra-ui/react'

export default function Custom404() {
  return (
    <Flex w={'100vw'} h={'100vh'} align={'center'} justifyContent={'center'}>
      <Flex
        bgColor={'white'}
        borderRadius={'md'}
        w={['90%', '90%', '80%', '100%']}
        maxW={'1180px'}
        justify={'space-around'}
        align={'center'}
        direction={'column'}
        gap={['10px', '10px', '15px', '20px']}
        py={['10px', '20px', '30px', '40px']}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={['lg', 'xl', '2xl', '4xl', '6xl']}
          fontWeight="bold"
        >
          Página não encontrada!
        </Text>
        <Image src={'/404.svg'} alt={'Página não encontrada'} />
        <Link
          href={'/'}
          fontSize={['2xs', 'xs', 'sm', 'md', 'lg']}
          fontWeight={'bold'}
        >
          Clique aqui para voltar ao início
        </Link>
      </Flex>
    </Flex>
  )
}
