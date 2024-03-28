import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image,  Avatar,  IconButton, Button} from '@chakra-ui/react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import Context from '../../context/CartContext'
const ItemDetail = ({categoria, descripcion, img, nombre, precio, id, stock}) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)
    const onAdd = (quantity) => {
        const item = {
            id,
            nombre, 
            precio,
            stock
        }
        addItem(item, quantity)
        setCantidad(quantity)
    }

  return (
        <Card maxW='md' mt={20}>
        <CardHeader>
            <Image
                objectFit='cover'
                src={img}
                alt={nombre}
                borderRadius='md'
                boxSize='100%'
                w={'400px'}
                h='400px' 
            />

        </CardHeader>
        <CardBody>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box w={'100%'}>
                <Heading 
                    size='md' 
                    textAlign={'center'}>
                    {nombre}
                </Heading>
                <Text fontSize='lg' textAlign={'center'}>Categoría: {categoria}</Text>
            </Box>
            <Text textAlign={'center'}>
            {descripcion}
            </Text>
        </Flex>
            <Text fontSize='3xl' textAlign={'center'} mt={10} color={'#243F4D'} fontWeight={'bold'}>
                ${precio}
            </Text>
            <Text fontSize='xl' textAlign={'center'} mt={1} color={'#243F4D'}>
            Stock disponible: {stock}
            </Text>
        </CardBody>


        <CardFooter w={'100%'} p={0}>

        {
            cantidad > 0 ?
            <Button 
            bg={'#AD886E'} 
            color={'#243F4D'}
            w={'100%'}
            h={'5vh'}
            mt={11}
            borderRadius={0}
            _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                    <Link to='/cart'>Ir al carrito</Link> 
                </Button>
                :
                <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        }
        </CardFooter>
        </Card>
  )
}

export default ItemDetail
