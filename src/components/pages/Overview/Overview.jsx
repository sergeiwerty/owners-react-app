import React, { useState, useEffect } from 'react'
import { Modal } from '../../ModalForm'
import NewOwners from './NewOwners'
import styles from './Overview.module.css'
//
import { useGlobalContext } from '../../context'

const getLocalStorage = () => {
  let listOfOwners = localStorage.getItem('listOfOwners')
  if (listOfOwners) {
    return JSON.parse(localStorage.getItem('listOfOwners'))
  } else {
    return []
  }
}

const Overview = ({ owners }) => {
  // временное:
  const {
    openModal,
    fullName,
    endDate,
    profits,
    losses,
    phone,
  } = useGlobalContext()
  //перенести
  const [modalShow, setModalShow] = useState(false)
  //
  const [listOfOwners, setList] = useState(getLocalStorage())
  // перенести
  // const [fullName, setFullName] = useState('')
  // const [endDate, setEndDate] = useState('')
  // const [profits, setProfits] = useState(null)
  // const [losses, setLosses] = useState(null)
  // const [phone, setPhone] = useState('')
  //
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
    // setList([...listOfOwners, newOwner])
    // setFullName('')
    // setEndDate('')
    // setProfits('')
    // setLosses('')
    // setPhone('')
    // setModalShow(false)
  }

  useEffect(() => {
    localStorage.setItem('listOfOwners', JSON.stringify(listOfOwners))
  }, [listOfOwners])
  return (
    <>
      <div className={styles.owners_heading}>
        {/* {!modalShow && <h2>Overview</h2>}
        {modalShow && (
          <form action='' className={styles.add_form} onSubmit={handleSubmit}>
            <div className={styles.iputs_wrapper}>
              <label htmlFor='fullName'>
                <span>Full name: </span>
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
                <span>End date: </span>
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
                <span>Profits: </span>
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
                <span>Losses: </span>
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
                <span>Phone: </span>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={phone}
                  placeholder='+7 XXX XXX XX XX'
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern='^\+7{1,2}(\s|-|‒|)\d{3}(\s|-|‒|)\d{3}(\s|-|‒|)\d{2}(\s|-|‒|)\d{2}$'
                />
              </label>
            </div>
            <div className={styles.form_buttons_wrapper}>
              <button type='submit'>Add owner</button>
              <button type='button' onClick={() => setModalShow(!modalShow)}>
                Hide
              </button>
            </div>
          </form>
        )} */}
        {!modalShow && (
          <div className={styles.button_wrapper}>
            <button
              className={styles.some_btn}
              type='submit'
              title='functionality is not yet available'
            >
              ...
            </button>
            <button
              className={styles.add_btn}
              // onClick={() => setModalShow(!modalShow)}
              onClick={openModal}
            >
              Add
            </button>
          </div>
        )}
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
      {/* <OwnersForm show={modalShow} /> */}
      <Modal />
    </>
  )
}

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
