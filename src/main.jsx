import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {JokesContextProvider} from './context/JokesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JokesContextProvider>
      <App />
    </JokesContextProvider>
  </React.StrictMode>,
)
