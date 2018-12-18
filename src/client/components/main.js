import {Route,Switch} from 'react-router-dom'
import StreamingPage from './StreamingPage'
import StreamerPage from './StreamerPage'
import React from 'react'

const main = ()=>(
  <div>
    <Switch>
      <Route exact path="/" component={StreamerPage}></Route>
      <Route exact path="/streaming" component={StreamingPage}></Route>
    </Switch>
  </div>
)

export default main
