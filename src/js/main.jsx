import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS Global
import '../styles/index.css';

// Componentes
import Home from './components/Home';
import Palito from './components/Palito';

// Plantamos UNA SOLA raíz y metemos ambos componentes adentro
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="d-flex flex-column align-items-center mt-5">
      <Palito />
      <Home />
    </div>
  </React.StrictMode>
);