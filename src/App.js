// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import ContactUs from './Pages/contact';
import './App.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2023 Cubanerium. All rights reserved.</p>
  </footer>
);

const App = () => (
  <>
    <Header />
    <div className="app-container">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </div>

    <Footer />
  </>
);

export default App;
