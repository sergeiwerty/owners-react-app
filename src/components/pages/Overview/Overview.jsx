import React, { useState, useEffect } from 'react'
import { Modal } from '../../ModalForm'
import NewOwners from './NewOwners'
import { paginate } from './utils'
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
  const { page, handlePage } = useGlobalContext()
  // перенёс в contex
  // const [page, setPage] = useState(0)
  // const [owners, setOwners] = useState([])

  // useEffect(() => {
  //   setOwners(paginate(owners)[page])
  // }, [])

  return (
    <>
      {paginate(owners)[page].map((owner) => {
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
      <Pagination owners={owners} />
    </>
  )
}

const Pagination = ({ owners }) => {
  const { page, handlePage } = useGlobalContext()

  const nextPage = () => {
    handlePage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > paginate(owners).length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    handlePage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = paginate(owners) - 1
      }
      return prevPage
    })
  }

  return (
    <>
      <div>
        <button className='prev-btn' onClick={prevPage}></button>
        {paginate(owners).map((item, index) => {
          return (
            <button key={index} onClick={() => handlePage(index)}>
              {index + 1}
            </button>
          )
        })}
        <button className='next-btn' onClick={nextPage}></button>
      </div>
    </>
  )
}

export default Overview
