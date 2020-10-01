import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
