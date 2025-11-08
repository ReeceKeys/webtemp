import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import {ChakraProvider, defaultSystem} from '@chakra-ui/react';
import Header from '@/components/Header';
import MenuComponent from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
      <MenuComponent />
    <App />
    </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
