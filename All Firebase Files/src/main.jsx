import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainAuth from './MainAuth.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
// import FireStore from './FireStore.jsx'
// import Authentication from './Authentication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* < App /> */}
    {/* < FireStore/> */}
    <Router>
    <MainAuth/>
    </Router>
  </StrictMode>
)
