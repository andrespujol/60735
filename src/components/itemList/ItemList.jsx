import React from 'react'
import Item from '../item/Item'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({data}) => {

  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
      {data.map((el) => (
        <Box key={el.id} m={2}>
            <Item {...el} />
        </Box>
      ))}
    </Flex>
  )
}

export default ItemList
