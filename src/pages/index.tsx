import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <Flex
      as={'main'}
      position={'relative'}
      bgGradient="linear(to-r, pink.500, orange.500)"
      height={['100%', '100vh']}
      width={'100vw'}
      align={'center'}
      justify={'center'}
      direction={'column'}
      gap={'1rem'}
    >
      <div className={styles['custom-shape-divider-top-1643064747']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles['shape-fill']}
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles['shape-fill']}
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles['shape-fill']}
          />
        </svg>
      </div>
      <Grid
        templateColumns={['1fr', '1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
        alignItems={'center'}
        gap={'4rem'}
        mt={'6rem'}
        zIndex={'1'}
      >
        <GridItem>
          <Grid
            as={'div'}
            w={['xs', 'sm', 'xl', '2xl', '3xl']}
            bgColor={'white'}
            borderRadius={'md'}
            gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
            alignContent={'center'}
            gap={'2rem'}
            px={['2rem', '3rem']}
            py={['1rem', '2rem']}
            mx={'auto'}
          >
            <GridItem
              display={'flex'}
              flexDir={'column'}
              justifyContent={'space-around'}
              h={['3xs', 'xs']}
              alignItems={'center'}
            >
              <Flex direction={'column'} align={'center'}>
                <Heading
                  as={'h1'}
                  bgGradient="linear(to-l, pink.500, orange.500)"
                  bgClip="text"
                  fontSize="4xl"
                  fontWeight="bold"
                >
                  Chatzada
                </Heading>
                <Text fontSize="md" fontWeight="bold">
                  O melhor chat com React/Next.js
                </Text>
              </Flex>

              <Flex direction={'column'} align={'center'} w={['100%']}>
                <FormControl id={'login'}>
                  <Input
                    name="username"
                    type="text"
                    border={'1px solid'}
                    borderColor={'pink.500'}
                    borderRadius={'md'}
                    placeholder="Digite seu usuário do GitHub"
                  />
                </FormControl>

                <Button
                  leftIcon={<FaGithub />}
                  p={4}
                  w={'100%'}
                  mt={4}
                  color="white"
                  fontWeight="bold"
                  borderRadius="md"
                  bgGradient="linear(to-r, pink.500, orange.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, orange.500, pink.500)',
                  }}
                >
                  Entrar
                </Button>
              </Flex>
            </GridItem>
            <GridItem
              display={'flex'}
              flexDir={'column'}
              direction={'column'}
              w={'2xs'}
              h={'xs'}
              border={'1px solid'}
              borderColor={'orange.200'}
              borderRadius={'md'}
              justifySelf={'center'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'1rem'}
            >
              <Image
                w={'3xs'}
                borderRadius={'md'}
                src={'https://github.com/NicolasLOrtiz.png'}
                alt="Logo"
              />
              <Flex direction={'column'} align={'center'} justify={'center'}>
                <Heading
                  as={'h2'}
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Nicolas Ortiz
                </Heading>
                <Text fontSize="lg" fontWeight="regular">
                  Full Stack Developer
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            w={['sm', 'md', 'lg', 'xl']}
            src={'/hero.svg'}
            alt={'Troca de mensagens'}
          />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Home
