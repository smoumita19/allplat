import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import { Home } from './pages/Home';
import NavbarComponent from './components/NavbarComponent';
import { FooterComponent } from './components/FooterComponent';


function App() {
  return (
    <div className="App">

      <NavbarComponent/>
      <Home />
      <FooterComponent/>
   
    </div>
 
  );
}



export default App;
