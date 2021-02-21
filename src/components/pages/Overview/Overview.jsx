import React, { useState, useEffect } from 'react'
import NewOwners from './NewOwners'
import styles from './Overview.module.css'
// import { owners } from '../../../ownersData'

const Overview = ({ owners }) => {
  const [show, setShow] = useState(false)
  const [listOfOwners, setList] = useState([])
  // const [show, setShow] = useState(false)
  const [fullName, setFullName] = useState('')
  const [endDate, setEndDate] = useState('')
  const [profits, setProfits] = useState(null)
  const [losses, setLosses] = useState(null)
  const [phone, setPhone] = useState('')
  // const [list, setList] = useState([owners])
  const handleSubmit = (e) => {
    e.preventDefault()
    const newOwner = {
      id: new Date().getTime().toString(),
      fullName,
      endDate,
      profits,
      losses,
      phone,
    }
    setList([...listOfOwners, newOwner])
    setFullName('')
  }
  return (
    <>
      <div className={styles.owners_heading}>
        {!show && <h2>Overview</h2>}
        {/* {show && <AddForm owners={owners} />} */}
        {show && (
          <form action='' className={styles.add_form} onSubmit={handleSubmit}>
            <div className={styles.iputs_wrapper}>
              <label htmlFor='fullName'>
                Full name:
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={fullName}
                  placeholder='Name Surname'
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>
              <label htmlFor='endDate'>
                End date:
                <input
                  type='text'
                  id='endDate'
                  name='endDate'
                  value={endDate}
                  placeholder='00/00/00'
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className={styles.iputs_wrapper}>
              <label htmlFor='profits'>
                Profits:
                <input
                  type='text'
                  id='profits'
                  name='profits'
                  value={profits}
                  onChange={(e) => setProfits(e.target.value)}
                  required
                />
              </label>

              <label htmlFor='losses'>
                Losses:
                <input
                  type='text'
                  id='losses'
                  name='losses'
                  value={losses}
                  onChange={(e) => setLosses(e.target.value)}
                  required
                />
              </label>
              <label htmlFor='phone'>
                Phone:
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>
              <button type='submit'>Add owner</button>
            </div>
          </form>
        )}
        <div>
          <button>...</button>
          <button className='add_btn' onClick={() => setShow(!show)}>
            Add
          </button>
        </div>
      </div>
      <p className={styles.lines_heading}>
        <span>Owner</span>
        <span>End date</span>
        <span>Profits</span>
        <span>Losses</span>
        <span>Phone</span>
      </p>
      <List owners={owners} />
      <NewOwners newOwners={listOfOwners} />
    </>
  )
}

// function AddForm() {
//   const [fullName, setFullName] = useState('')
//   // const [endDate, setEndDate] = useState('')
//   // const [profits, setProfits] = useState('')
//   // const [losses, setLosses] = useState('')
//   // const [phone, setPhone] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const newOwner = {
//       id: new Date().getTime().toString(),
//       name: fullName,
//       // endDate,
//       // profits,
//       // losses,
//       // phone,
//     }
//     setList([...list, newOwner])
//   }
//   return (
//     <form action='' className={styles.add_form} onSubmit={handleSubmit}>
//       <div className={styles.iputs_wrapper}>
//         <label htmlFor='fullName'>
//           Full name:
//           <input
//             type='text'
//             id='fullName'
//             name='fullName'
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </label>

//         <label htmlFor='endDate'>
//           End date:
//           <input
//             type='text'
//             id='endDate'
//             name='endDate'
//             value={endDate}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//         </label>
//       </div>
//       <div className={styles.iputs_wrapper}>
//         <label htmlFor='profits'>
//           Profits:
//           <input
//             type='text'
//             id='profits'
//             name='profits'
//             value={profits}
//             onChange={(e) => setProfits(e.target.value)}
//             required
//           />
//         </label>

//         <label htmlFor='losses'>
//           Losses:
//           <input
//             type='text'
//             id='losses'
//             name='losses'
//             value={losses}
//             onChange={(e) => setLosses(e.target.value)}
//             required
//           />
//         </label>
//         <label htmlFor='phone'>
//           Phone:
//           <input
//             type='text'
//             id='phone'
//             name='phone'
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </label>
//         <button type='submit'>Add owner</button>
//       </div>
//     </form>
//   )
// }

const List = ({ owners }) => {
  return (
    <>
      {owners.map((owner) => {
        const { id, name, endDate, profits, losses, phone } = owner
        return (
          <>
            <article key={id} className='owner'>
              <div className={styles.owner_line}>
                <h3>{name}</h3>
                <span>{endDate}</span>
                <span className={styles.profits}>{profits}</span>
                <span className={styles.losses}>{losses}</span>
                <span>{phone}</span>
              </div>
            </article>
          </>
        )
      })}
    </>
  )
}

export default Overview
