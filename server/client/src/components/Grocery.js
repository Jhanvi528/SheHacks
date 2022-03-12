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
import Header from './Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function StoreItem (props) {
  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Center>
        <Image src={props.img} h={220} w={200} pb={4} />
      </Center>
      <Heading size='sm' fontWeight='normal' noOfLines={2}>
        {props.item}
      </Heading>
      <Spacer />

      <Tag marginTop={4}>${props.price}</Tag>
    </Box>
  )
}

function Grocery () {
  const [StoreItems, setStoreItem] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchItem, setSearchItem] = useState([])

  useEffect(() => {
    fetch('/grocery')
      .then(res => res.json())
      .then(data => {
        setSearchItem(data);
        setStoreItem(data);
        setLoading(false);
      });
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
                StoreItems.filter(product =>
                  product.item
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              )
            }}
          />

          <SimpleGrid columns={4} spacing={10} mt={4} p={2}>
            {searchItem.map(product => {
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <StoreItem {...product} />
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

export default Grocery