import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import { Home } from './pages/Home';
import NavbarComponent from './components/NavbarComponent';
import { FooterComponent } from './components/FooterComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { CardComponent } from './components/CardComponent';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Form,
  json,
  Link,
  Outlet,
  Route,
  RouterProvider,
  unstable_useBlocker as useBlocker,
  useLocation,
} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import CarouselComponent from './components/CarouselComponent';
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactUs } from './pages/ContactUs';
import { AboutUs } from './pages/AboutUs';

//Need to fix it

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavbarComponent />}>
      <Route index 
        element={<Home /> } 
      />
      <Route path="about-us" 
        element={<AboutUs />} 
      />
      <Route path="two" 
        element={<h2>Two</h2>} 
      />
      <Route path="three" 
        element={
         <CarouselComponent />
        }
      />
      <Route path="four" 
        element={<h2>Four</h2>} 
      />
      <Route path="contact-us" 
        element={<ContactUs />} 
      />
    </Route>
  )
);


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return  <RouterProvider router={router} />;
}

export default App;
