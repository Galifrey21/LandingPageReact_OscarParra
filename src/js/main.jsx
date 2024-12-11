import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Galeria from './components/Galeria';
import PieDePAgina from './components/PieDePAgina';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Jumbotron/>
    <Galeria/>
    <PieDePAgina/>
    

  </React.StrictMode>,
)
