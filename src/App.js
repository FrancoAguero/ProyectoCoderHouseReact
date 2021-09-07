import React, { useEffect } from 'react'
import NavBar from './components/NavBar' 
import './assets/styles/App.scss'

const App = () => { 
  const handleHomeContent = () => {
    let homeContent = document.querySelector('.home_content')
    homeContent.classList.toggle('active')
  }

  return (
    <div>
      <NavBar handleHomeContent={handleHomeContent}/>
      <div className="home_content">
        <h1 className="text"> Hola Mundo!!! </h1>
      </div>
    </div>
  )
}

export default App