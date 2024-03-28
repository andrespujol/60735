import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Heading,
    Flex,
    Center,
  } from '@chakra-ui/react'
  import { RiDeleteBin4Line } from "react-icons/ri";

import Context from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
    const { cart, getTotal, removeItem, clearCart } = useContext(Context)
    
    if(cart.length === 0) {
        return(
            <Flex direction={'column'} align={'center'} mt={10}>
                <Heading>Todavía no agregaste productos al carrito</Heading>
                <Heading><Link to='/'>Ver productos</Link></Heading>
            </Flex>
        )
    }else {

        return (
            <TableContainer>
                <Table >
                    <Thead>
                    <Tr>
                        <Th>Producto</Th>
                        <Th>Cantidad</Th>
                        <Th>Precio</Th>
                        <Th>Subtotal</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((producto, index) => (
                                <Tr key={producto.id} bg={index % 2 === 0 ? '#243F4D' : 'white'} color={index % 2 === 0 ? 'white' : '#243F4D'}>
                                    <Td>{producto.nombre}</Td>
                                    <Td>{producto.quantity}</Td>
                                    <Td>{producto.precio}</Td>
                                    <Td>{producto.precio * producto.quantity}</Td>
                                    <Td><Button bg={'transparent'} color={index % 2 === 0 ? 'white' : '#243F4D'} onClick={() => removeItem(producto.id)}><RiDeleteBin4Line /></Button></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                    <Tr >
                        <Td colSpan={5} border={'none'}>
                            <Center>
                                <Flex w={'40%'} justify={'space-around'} align={'center'}>
                                    <Th fontSize={'2xl'}>Total ${getTotal()}</Th>
                                    <Th><Button onClick={() => clearCart()}>Vaciar carrito</Button></Th>
                                </Flex>
                            </Center>
                        </Td>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
        }
}

export default Cart
