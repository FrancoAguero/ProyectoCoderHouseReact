import React, { useEffect } from 'react'

//Components
import NavBar from './components/NavBar'
import CardContainer from './components/CardContainer'
import ItemCount from './components/ItemCount'

//Data
import data from './assets/data/data'

//Style
import './assets/styles/App.scss'
import { Grid } from '@material-ui/core'

const App = () => { 
  const handleHomeContent = () => {
    let homeContent = document.querySelector('.home_content')
    homeContent.classList.toggle('active')
  }
  const products = data

  return (
    <div>
      <NavBar handleHomeContent={handleHomeContent}/>
      <div className="home_content">
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} alignItems={'center'}>
            <ItemCount initialState={0}/>
          </Grid>
          {
            products.map((product) => {
              return (
                <Grid item xs={4}>
                  <CardContainer key={product.id} img={product.img} title={product.name} price={product.price}/>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>
  )
}

export default App