import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Presenze from '../sections/presenze/Presenze'
import Consegne from '../sections/Consegne'

const MainContainer = () => (
  <Switch>
    <Route exact path='/' component={Presenze}/>
    <Route path='/consegne' component={Consegne}/>
  </Switch>
)

export default MainContainer