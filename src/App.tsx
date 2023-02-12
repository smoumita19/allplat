import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import { Home } from './pages/Home';
import NavbarComponent from './components/NavbarComponent';
import { FooterComponent } from './components/FooterComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { CardComponent } from './components/CardComponent';


function App() {
  return (
    <div className="App">

      <NavbarComponent/>
      <Home />
      <ButtonComponent />
      <CardComponent fontClass='bi bi-textarea' cardText='With supporting text below as a natural lead-in to additional content.' />
      <FooterComponent/>
   
    </div>
 
  );
}



export default App;
