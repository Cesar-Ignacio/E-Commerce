import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
