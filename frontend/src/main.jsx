import {createRoot} from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'

import { system } from "@chakra-ui/react/preset";


createRoot(document.getElementById('root')).render(
  <ChakraProvider value = {system}>
    <App/>
  </ChakraProvider>
)
