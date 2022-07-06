import React from 'react'
import {Route,Switch} from "react-router-dom"
import HomePage from '../Layouts/HomePage'
import LandPage from '../Layouts/MainHome/LandPage'

const RoutePage = () => {
  return (
    <Switch>
        <Route exact path={"/"} component={HomePage}></Route>
        <Route exact path={`/:id/homeLand`} component={LandPage}></Route>
    </Switch>
  )
}

export default RoutePage
