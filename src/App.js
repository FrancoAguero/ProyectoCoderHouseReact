import React, { useEffect, useState } from 'react';

//Router
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from "utils/PrivateRoute";

//Components
import NavBar from './components/NavBar/NavBar';

//Pages
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
import LogInSignUp from './pages/LogInSignUp'

//Style
import './assets/styles/App.scss';
import Shop from './pages/Shop';

//Context
import { CartProvider } from './context/CartContext';
import { AuthProvider } from "./context/AuthContext";

const App = () => { 
  const handleHomeContent = () => {
    let homeContent = document.querySelector( '.home_content' )
    homeContent.classList.toggle( 'active' )
  };

  const LoginAprobed = () =>  {
    return( 
      <div>
        <NavBar handleHomeContent={ handleHomeContent }/>
        <div className="home_content">
            <Route exact path={ "/" } component={ Home }/>
            <Route exact path={ "/shop" } component={ Shop }/>
            <PrivateRoute exact path={ "/cart" } component={ Cart }/>
            <Route exact path={ "/itemDetail/:itemId" } component={ ItemDetailContainer }/>
        </div>
    </div>
    )
  }

  return (
    <BrowserRouter>
      <AuthProvider>
      <CartProvider>
          <Switch>
            <Route exact path={ "/logIn" } component={ LogInSignUp }/>
            <Route path="/" component={ LoginAprobed }/>
          </Switch>
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;