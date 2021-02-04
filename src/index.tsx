import React from 'react'
import ReactDOM from 'react-dom'
import HomeContainer from './pods/Home/HomeContainer'
import SeriesContainer from './pods/Series/SeriesContainer'
import MoviesContainer from './pods/Movies/MoviesContainer'

import './styles/globals.sass'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/series">
          <SeriesContainer />
        </Route>
        <Route path="/movies">
          <MoviesContainer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
