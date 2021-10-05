import React from 'react';

//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';

//Pages
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';

//Style
import './assets/styles/App.scss';
import Category from './pages/Category';
import Shop from './pages/Shop';

//Context
import { CartProvider } from './context/CartContext';

const App = () => { 
  const handleHomeContent = () => {
    let homeContent = document.querySelector('.home_content')
    homeContent.classList.toggle('active')
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar handleHomeContent={handleHomeContent}/>
        <div className="home_content">
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/shop"} component={Shop}/>
            <Route exact path={"/cart"} component={Cart}/>
            <Route exact path={"/itemDetail/:itemId"} component={ItemDetailContainer}/>
            <Route exact path={"/category/:category"} component={Category}/>
          </Switch>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;