import React, { useState, useEffect } from 'react'
import styles from './Overview.module.css'
// import { owners } from '../../../ownersData'

const Overview = ({ owners }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={styles.owners_heading}>
        {!show && <h2>Overview</h2>}
        {show && <AddForm />}
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
      {owners.map((owner) => {
        const { id, name, endDate, profits, losses, phone } = owner
        // const { id, name, endDate, profits, losses, phone } = owner
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

function AddForm() {
  return (
    <form action='' className={styles.add_form}>
      <div className={styles.iputs_wrapper}>
        <label htmlFor='fullName'>
          Full name:
          <input type='text' id='fullName' name='fullName' />
        </label>

        <label htmlFor='endDate'>
          End date:
          <input type='text' id='endDate' name='endDate' />
        </label>
      </div>
      <div className={styles.iputs_wrapper}>
        <label htmlFor='profits'>
          Profits:
          <input type='text' id='profits' name='profits' />
        </label>

        <label htmlFor='losses'>
          Losses:
          <input type='text' id='losses' name='losses' />
        </label>
        <label htmlFor='phone'>
          Phone:
          <input type='text' id='phone' name='phone' />
        </label>
      </div>
    </form>
  )
}

export default Overview
