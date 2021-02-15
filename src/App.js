import React, { useState } from 'react'
import { data } from './ownersData'
import './App.css'
import OwnersList from './components/Owners/OwnersList'
import Sidebar from './components/Sidebar/Sidebar'

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
