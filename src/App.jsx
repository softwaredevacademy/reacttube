// React core
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import HomePage from './components/templates/HomePage'
import ResultsPage from './components/templates/ResultsPage'
import VideoPage from './components/templates/VideoPage'

// Style
import './style/style.css'

export default function App() {
  // Render
  return (
    <Router>
      <main className='App'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/results/:query' component={ResultsPage} />
          <Route path='/video/:id' component={VideoPage} />
        </Switch>
      </main>
    </Router>
  )
}