import React, { useState } from 'react'
import { data } from './ownersData'
import './App.css'
import OwnersList from './components/OwnersList'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [owners, setOwners] = useState(data)
  return (
    <main>
      <section className='container'>
        <h2>Overview</h2>
        <Sidebar />
        <OwnersList owners={owners} />
        <button onClick={() => setOwners(data)}>Ничего не произойдёт</button>
      </section>
    </main>
  )
}

export default App
