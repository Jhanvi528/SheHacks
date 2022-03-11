import React from 'react'
import {
  Box,
  Image,
  Heading,
  SimpleGrid,
  Spacer,
  Tag,
  Center,
  Input,
  Spinner
} from '@chakra-ui/react'
import axios from 'axios'
import Header from './Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function StoreItem (props) {
  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Center>
        <Image src={props.MainImage.url_fullxfull} h={220} w={200} pb={4} />
      </Center>
      <Heading size='sm' fontWeight='normal' noOfLines={2}>
        {props.title}
      </Heading>
      <Spacer />

      <Tag marginTop={4}>${props.price}</Tag>
    </Box>
  )
}

function Store () {
  const [StoreItems, setStoreItem] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchItem, setSearchItem] = useState(StoreItems)

  useEffect(() => {
    axios
      .get(
        'https://openapi.etsy.com/v2/listings/active?api_key=b2trjlfahlgzbgecvb26mbct&includes=MainImage&limit=100&offset=250&'
      )
      .then(({ data }) => {
        setLoading(false)
        setStoreItem(data.results)
        setSearchItem(data.results)
      })
  }, [])

  return (
    <Box>
      <Header />
      {loading ? (
        <Center pt={4}>
          <Spinner />
        </Center>
      ) : (
        <Box p={4}>
          <Input
            placeholder='Search'
            mt={5}
            onChange={e => {
              setSearchItem(
                StoreItems.filter(item =>
                  item.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              )
            }}
          />

          <SimpleGrid columns={4} spacing={10} mt={4} p={2}>
            {searchItem.map(item => {
              return (
                <Link
                key={item.listing_id}
                  to={ `/product/${item.listing_id}`}
                >
                  <StoreItem {...item} />
                </Link>
              )
            })}
          </SimpleGrid>
        </Box>
      )}
      <Footer />
    </Box>
  )
}

export default Store
