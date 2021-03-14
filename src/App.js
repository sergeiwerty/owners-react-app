import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { owners } from './ownersData'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// layout
import { Layout } from './components/Layout'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// pages
import Overview from './components/pages/Overview/Overview'
import Cloud from './components/pages/Cloud'
import Sketch from './components/pages/Sketch'
import Experiments from './components/pages/Experiments'
import Security from './components/pages/Security'
import Ownership from './components/pages/Ownership'
import ABtest from './components/pages/AB_test'
import Colors from './components/pages/Colors'
import Error from './components/pages/Error'

// sidebar
import Sidebar from './components/Sidebar/Sidebar'
function App() {
  // const [owners, setOwner] = useState(data)
  return (
    <Layout>
      <div className='container-fluid'>
        <Router>
          <main className='main-container'>
            <Sidebar />
            <section className='navigation col-10 col-lg-12' id='main'>
              <Switch>
                <Route exact path={['/', '/owners-react-app']}>
                  <Overview />
                </Route>
                <Route path='/cloud'>
                  <Cloud />
                </Route>
                <Route path='/sketch'>
                  <Sketch />
                </Route>
                <Route path='/experiments'>
                  <Experiments />
                </Route>
                <Route path='/security'>
                  <Security />
                </Route>
                <Route path='/ownership'>
                  <Ownership />
                </Route>
                <Route path='/ab_test'>
                  <ABtest />
                </Route>
                <Route path='/colors'>
                  <Colors />
                </Route>
                <Route path='*'>
                  <Error />
                </Route>
              </Switch>
            </section>
          </main>
        </Router>
      </div>
    </Layout>
  )
}

export default App
