import React from 'react';
import Products from './Products'
import NavBar from './NavBar'
import SiteRoutes from './SiteRoutes';
import { BrowserRouter } from 'react-router-dom'
import CartItemList from './CartItemList';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SiteRoutes />
    </div>
  );
}

export default App;
