import React, { useEffect, useState } from 'react'
import { useTranslation, initReactI18next } from 'react-i18next'

import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Center,
  HStack,
  SimpleGrid,
  Grid,
  GridItem,
  Stack,
  Tag
} from '@chakra-ui/react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'
import { WhatsappIcon } from 'react-share'

function Product () {
  const [state, setState] = useState({})
  const id1 = useParams()
  const [image, setImage] = useState('')
  // console.log(id1.id)
  useEffect(async () => {
    const response = await fetch('/product')
    const data = await response.json()
    setState(data)
    setImage(data.img)
  }, [])

  useEffect(() => {
    fetch('/productfind', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id1.id })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setState(result)
        setImage(result.img)
      })
  }, [])
  const { t } = useTranslation()

  return (
    <Box>
      <Header />
      <Box p={2} d='flex' alignItems='center' m={18}>
        <Box m={10}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image src={image} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Heading>{state.item}</Heading>
                <Heading>{t('Price')}: ${state.price}</Heading>
                <Box mt={3}>
                  <Tag as='i'>{t('Category')}:{state.cat}</Tag>
                </Box>
                <Text mt={5} noOfLines={10}>
                  {t('Description')}: {state.desc}
                </Text>
                <HStack>
                  <Button w='xs' size='sm' colorScheme='linkedin'>
                    {t('Buynow!')}
                  </Button>

                  <WhatsappShareButton
                    title='Sharing Button'
                    url='www.youtube.com'
                  >
                    <WhatsappIcon
                      logoFillColor='white'
                      round='true'
                    ></WhatsappIcon>
                  </WhatsappShareButton>
                </HStack>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
export default Product
