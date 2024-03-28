import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import { Flex, Spinner } from '@chakra-ui/react'


const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then((el) => setProduct(el))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    },[])

    console.log(product)
  return (
    <div>
              {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'90vh'}>

          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#243F4D'
            size='xl'
            /> 
          </Flex>
          : 
        <>
        <Flex justify={'center'} align={'center'} h={'70vh'}>
          <ItemDetail {...product} />
        </Flex>
        </>
      }
    </div>
  )
}

export default ItemDetailContainer
