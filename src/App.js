import React from 'react';

//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home';
import Counter from './pages/Counter';
import ItemDetailContainer from './pages/ItemDetailContainer'

//Style
import './assets/styles/App.scss';


const App = () => { 
  const handleHomeContent = () => {
    let homeContent = document.querySelector('.home_content')
    homeContent.classList.toggle('active')
  };

  return (
    <BrowserRouter>
      <NavBar handleHomeContent={handleHomeContent}/>
      <div className="home_content">
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/counter"} component={Counter}/>
          <Route exact path={"/itemDetail/:itemId"} component={ItemDetailContainer}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;