import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';
import './CartWidget.css'
const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex justify={'space-around'} align={'center'} w={'5%'}mr={3} className='cartIconContainer'>
      <Link to='/cart' className='cartIcon'><IoCartSharp /></Link>
      <span className='cartQuantity'>{getQuantity() > 0 && getQuantity()}</span>
    </Flex>
  )
}

export default CartWidget
