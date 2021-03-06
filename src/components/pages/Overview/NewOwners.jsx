import React from 'react'
import styles from './Overview.module.css'

import { useGlobalContext } from '../../context'

const NewOwners = () => {
  const { listOfOwners } = useGlobalContext()
  console.log(listOfOwners)
  return (
    <>
      {listOfOwners.map((newOwner) => {
        const { id, fullName, endDate, profits, losses, phone } = newOwner
        return (
          <>
            <article key={id} className='owner'>
              <div className={styles.owner_line}>
                <h3>{fullName}</h3>
                <span>{endDate}</span>
                <span className={styles.profits}>{`$${Math.abs(
                  profits
                )}`}</span>
                <span className={styles.losses}>{`$${Math.abs(losses)}`}</span>
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
