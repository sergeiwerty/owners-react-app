import React from 'react'
import styles from './Overview.module.css'
import { owners } from '../../../ownersData'

const Overview = (owners) => {
  return (
    <>
      {/* <div className={styles.owners_heading}>
        <h2>Overview</h2>
        <div>
          <button>...</button>
          <button>Add</button>
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
      })} */}
    </>
  )
}

export default Overview
