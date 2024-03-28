import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/itemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import './App.css'
function App() {

  return (
    <ChakraProvider> 
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer title='Tienda' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer title='Tienda' />} />
            <Route path='/product/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App
