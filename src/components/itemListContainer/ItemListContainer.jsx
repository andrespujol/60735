import React, { useEffect, useState } from 'react'
import useProductData from '../../hooks/useProductData'
import ItemList from '../itemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import { Flex, Heading, Spinner } from '@chakra-ui/react'
const ItemListContainer = ({ title }) => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()
  
  useEffect(() => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProducts
      .then((el) => setData(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },[categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'90vh'}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='243F4D'
            size='xl'
            /> 
          </Flex> 
          : 
        <>
          <Heading color={'#FCD7B6'} mt={10}>{title}</Heading>
          <ItemList data={data} />
        </>
      }
    </Flex>
  )
}

export default ItemListContainer
