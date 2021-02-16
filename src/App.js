import React, { useState } from 'react'
import { data } from './ownersData'
import './App.css'
import OwnersList from './components/Owners/OwnersList'
import Sidebar from './components/Sidebar/Sidebar'
import Cloud from './components/empty_pages/Cloud'
import Sketch from './components/empty_pages/Sketch'
import Experiments from './components/empty_pages/Experiments'
import Security from './components/empty_pages/Security'
import Ownership from './components/empty_pages/Ownership'
import AB_test from './components/empty_pages/AB_test'
import Colors from './components/empty_pages/Colors'

function App() {
  const [owners, setOwners] = useState(data)
  return (
    <main>
      <Sidebar />
      <section className='container'>
        <OwnersList owners={owners} />
        <button onClick={() => setOwners(data)}>Ничего не произойдёт</button>
      </section>
    </main>
  )
}

export default App
