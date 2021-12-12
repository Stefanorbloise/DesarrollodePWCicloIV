import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Principal from "./components/Principal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './components/Login';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './styles/Tabla.css';
import EditarUsuario from './pages/usuarios/EditarUsuarios';
import EditarProyectos from './pages/proyectos/EditarProyectos';



const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});



ReactDOM.render(

  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/Principal" element={<App />} />
          <Route path="/" element={<Login />} />
          <Route path="/Proyectos" element={<Principal component="1" />} />
          <Route path="/Proyectos/editar/:_id" element={<EditarProyectos/>} />
          <Route path="/Usuarios" element={<Principal component="2" />} />
          <Route path="/Usuarios/editar/:_id" element={<EditarUsuario/>} />
        </Routes>
      </Router>
    </React.StrictMode>,
  </ApolloProvider>,
  document.getElementById('root')
);