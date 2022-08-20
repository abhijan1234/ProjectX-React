import React from 'react'
import {Route,Switch} from "react-router-dom"
import Contacts from '../Layouts/Contacts/Contacts'
import HomePage from '../Layouts/HomePage'
import Main from '../Layouts/Main/Main'
import Profile from '../Layouts/Profile/Profile'
import Projects from '../Layouts/Projects/Projects'
import Reports from '../Layouts/Reports/Reports'

const RoutePage = () => {
  
  return (
    <Switch>
        <Route exact path={"/"} component={HomePage}></Route>
        <Route path={`/:id/homeLand`} component={Main}></Route>
        <Route path={`/:id/projects`} component={Projects}></Route>
        <Route path={`/:id/contacts`} component={Contacts}></Route>
        <Route path={`/:id/reports`} component={Reports}></Route>
        <Route path={`/:id/profile`} component={Profile}></Route>

    </Switch>
  )
}

export default RoutePage
