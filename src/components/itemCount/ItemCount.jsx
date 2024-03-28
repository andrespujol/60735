import React from 'react'
import useCounter from '../../hooks/useCounter'
import './ItemCount.css'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
const ItemCount = ({stock, initialValue, onAdd}) => {

    const { count , incrementar, decrementar } = useCounter(stock, initialValue)

    
  return (
    <Flex direction={'column'} align={'center'} justify={'center'} w={'100%'}>
      <Box className='counterContainer'>
        <Button         
          bg={'#243F4D'} 
          color={'#fff'}
          _hover={{ bg: '#3E6478', color: '#fff' }} 
          className='btnCounter'  
          onClick={decrementar}>
            -
        </Button>
        <Heading p={2}>{count}</Heading>
        <Button         
          bg={'#243F4D'} 
          color={'#fff'}
          _hover={{ bg: '#3E6478', color: '#fff' }}
          className='btnCounter'  
          onClick={incrementar}>
            +
        </Button>
      </Box>
      <Button 
        bg={'#243F4D'} 
        color={'#fff'}
        w={'100%'}
        h={'5vh'}
        borderRadius={0}
        _hover={{ bg: '#3E6478', color: '#fff' }} 
        onClick={() => onAdd(count)}
          >Agregar al carrito
        </Button>
    </Flex>
  )
}

export default ItemCount
