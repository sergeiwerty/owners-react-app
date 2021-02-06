import React from 'react'

const OwnersList = ({ owners }) => {
  return (
    <>
      {owners.map((owner) => {
        const { id, name, profits } = owner
        // const { id, name, endDate, profits, losses, phone } = owner
        return (
          <article key={id} className='owner'>
            <div>
              <h3>{name}</h3>
              <p>{profits}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default OwnersList
