// import React, { useState } from 'react'
import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { owners } from './ownersData'
import './App.css'
import Overview from './components/pages/Overview/Overview'
import Sidebar from './components/Sidebar/Sidebar'
import Cloud from './components/pages/Cloud'
import Sketch from './components/pages/Sketch'
import Experiments from './components/pages/Experiments'
import Security from './components/pages/Security'
import Ownership from './components/pages/Ownership'
import ABtest from './components/pages/AB_test'
import Colors from './components/pages/Colors'
import Error from './components/pages/Error'

// function App() {
//   debugger
//   // const [owners, setOwners] = useState(data)
//   return (
//     <main>
//       <Sidebar />
//       <section className='container'>
//         <Overview owners={owners} />
//         {/* <button onClick={() => setOwners(data)}>Ничего не произойдёт</button> */}
//       </section>
//     </main>
//   )
// }

function App() {
  // debugger
  // const [owners, setOwners] = useState(data)
  return (
    <Router>
      <Switch>
        <main>
          <Sidebar />
          <section className='container'>
            {/* <Overview /> */}
            {/* <button onClick={() => setOwners(data)}>Ничего не произойдёт</button> */}
            <Route exact path='/'>
              <Overview />
            </Route>
          </section>
        </main>
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
    </Router>
  )
}

// function App() {
//   const [owners, setOwners] = useState(data)
//   return (
//     <Router>
//       <main>
//         <Sidebar />
//         <section className='container'>
//           <Overview owners={owners} />
//           <button onClick={() => setOwners(data)}>Ничего не произойдёт</button>
//         </section>
//       </main>
//       <Switch>
//         <Route exact path='/'>
//           <Overview />
//         </Route>
//         <Route path='/cloud'>
//           <Cloud />
//         </Route>
//         <Route path='/sketch'>
//           <Sketch />
//         </Route>
//         <Route path='*'>
//           <Error />
//         </Route>
//       </Switch>
//     </Router>
//   )
// }

export default App
