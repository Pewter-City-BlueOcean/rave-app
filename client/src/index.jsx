import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark',
      colors: {
        dark: [
          '#eeeee4',
          '#A6A7AB',
          '#909296',
          '#5C5F66',
          '#373A40',
          '#101113',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
        ],
      }

    }}
  >

      <BrowserRouter>
        <App />
      </BrowserRouter>
  </MantineProvider>);