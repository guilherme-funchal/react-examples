import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Ajuda from './Components/Plataforma';
import Configuracao from './Components/Administracao';
import Projetos from './Components/Projetos';
import Tokens from './Components/Tokens';
import Transfer from './Components/Transfer';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router forceRefresh={true}>
        <Routes>
          <Route path="/" element={<App />} exact/>
          <Route path="/Plataforma" element={<Ajuda />} exact/>
          <Route path="/Tokens" element={<Tokens />} exact/>
          <Route path="/Transfer" element={<Transfer />} exact/>
          <Route path="/Administracao" element={<Configuracao />} exact/>
          <Route path="/Dashboard" element={<Dashboard />} exact/>
          <Route path="/Projetos" element={<Projetos />} exact/>
        </Routes>
    </Router>
    
);


