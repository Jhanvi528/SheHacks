import React, { useEffect, useState } from 'react'
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
import { useRef } from 'react'

// const Header = ({ title }) => (
//   <Box padding={6} shadow='md'>
//     <Heading>{title}</Heading>
//   </Box>
// )

function Product () {
  const [state, setState] = useState({})
  const { listing_id } = useParams()
  console.log(listing_id)

  const [image, setImage] = useState({})
  
  useEffect(async () => {
    const response = await fetch(
      `https://openapi.etsy.com/v2/listings/${listing_id}?api_key=b2trjlfahlgzbgecvb26mbct&includes=MainImage&limit=100&offset=250&`
    )
    // .then(res => res.json())
    // .then(data => setState(data.results[0]))
    const data = await response.json()
    setState(data.results[0])
    setImage(data.results[0].MainImage)
  }, [])
  console.log(state)

  return (
    <Box>
      <Header />
      <Box p={2} d='flex' alignItems='center' m={18}>
        <Box m={10}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image src={image.url_fullxfull} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Heading>{state.title}</Heading>
                <Heading>Price: ${state.price}</Heading>
                <Box mt={3}>
                  <Tag as='i'>Category: {state.taxonomy_path}</Tag>
                </Box>
                <Text mt={5} noOfLines={10}>
                  Description: {state.description}
                </Text>
                <HStack>
                  <Button w='xs' size='sm' colorScheme='linkedin'>
                    Buy now!
                  </Button>
                  <Button w='xs' size='sm'>
                    Share Product
                  </Button>
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
