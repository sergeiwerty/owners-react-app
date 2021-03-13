import React, { useState, useEffect } from 'react'
import { Modal } from '../../ModalForm'
import NewOwners from './NewOwners'
import { paginate } from './utils'
import styles from './Overview.module.css'
import './overview.css'
import arrow_btn from './images/arrow_btn.svg'
//
import { useGlobalContext } from '../../context'

const Overview = () => {
  const {
    openModal,
    listOfOwners,
    allOwners,
    mergeOwners,
    handlePageAfterAdd,
  } = useGlobalContext()

  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    mergeOwners(allOwners, listOfOwners)
    handlePageAfterAdd()
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
            <button className={styles.add_btn} onClick={openModal}>
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
      <List />
      {/* <NewOwners /> */}

      <Modal />
    </>
  )
}

const List = () => {
  const {
    page,
    handlePage,
    owners,
    allOwners,
    ownersTrigger,
  } = useGlobalContext()

  return (
    <>
      {paginate(ownersTrigger ? allOwners : owners)[page].map((owner) => {
        const { id, fullName, endDate, profits, losses, phone } = owner
        return (
          <>
            <article key={id} className='owner'>
              <div className={styles.owner_line}>
                <h3>{fullName}</h3>
                <span>{endDate}</span>
                <span className={styles.profits}>{profits}</span>
                <span className={styles.losses}>{losses}</span>
                <span>{phone}</span>
              </div>
            </article>
          </>
        )
      })}
      <Pagination />
    </>
  )
}

const Pagination = () => {
  const { currentPage, page, handlePage, allOwners } = useGlobalContext()

  const nextPage = () => {
    handlePage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > paginate(allOwners).length - 1) {
        nextPage = 0
      }
      console.log(nextPage)
      return nextPage
    })
  }

  const prevPage = () => {
    handlePage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = paginate(allOwners).length - 1
      }
      console.log(prevPage)
      return prevPage
    })
  }

  return (
    <>
      <div className='pagination-container'>
        <button className='prev-btn' onClick={prevPage}>
          <img src={arrow_btn} alt='previous-btn' />
          {handlePage}
        </button>
        {paginate(allOwners).map((item, index) => {
          if (index === 0) {
            return (
              <button
                key={index}
                onClick={() => handlePage(index)}
                className='page-num'
              >
                {page + 1}
              </button>
            )
          } else {
            return (
              <button
                key={index}
                onClick={() => handlePage(index)}
                className='page-num'
              >
                {index + 1}
              </button>
            )
          }
        })}
        <button className='next-btn' onClick={nextPage}>
          <img src={arrow_btn} alt='next-btn' />
        </button>
      </div>
    </>
  )
}

export default Overview
