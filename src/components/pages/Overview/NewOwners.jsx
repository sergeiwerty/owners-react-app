import React from 'react'
import styles from './Overview.module.css'

const NewOwners = ({ newOwners }) => {
  return (
    <>
      {newOwners.map((newOwner) => {
        const { id, fullName, endDate, profits, losses, phone } = newOwner
        return (
          <>
            <article key={id} className='owner'>
              <div className={styles.owner_line}>
                <h3>{fullName}</h3>
                <span>{endDate}</span>
                <span className={styles.profits}>{`$${profits}`}</span>
                <span className={styles.losses}>{`$${losses}`}</span>
                <span>{phone}</span>
              </div>
            </article>
          </>
        )
      })}
    </>
  )
}

export default NewOwners
