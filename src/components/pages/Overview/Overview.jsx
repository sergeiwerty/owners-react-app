import React, { useState, useEffect } from 'react'
import { Modal } from '../../ModalForm'
import NewOwners from './NewOwners'
import styles from './Overview.module.css'
//
import { useGlobalContext } from '../../context'

// const getLocalStorage = () => {
//   let listOfOwners = localStorage.getItem('listOfOwners')
//   if (listOfOwners) {
//     return JSON.parse(localStorage.getItem('listOfOwners'))
//   } else {
//     return []
//   }
// }

const Overview = ({ owners }) => {
  const { openModal, listOfOwners } = useGlobalContext()

  //перенести
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    localStorage.setItem('listOfOwners', JSON.stringify(listOfOwners))
  }, [listOfOwners])
  return (
    <>
      <div className={styles.owners_heading}>
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
      <NewOwners />
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
