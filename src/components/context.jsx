import React, { useContext, useState } from 'react'

const OwnersContext = React.createContext()

const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    let listOfOwners = localStorage.getItem('listOfOwners')
    if (listOfOwners) {
      return JSON.parse(localStorage.getItem('listOfOwners'))
    } else {
      return []
    }
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  //
  const [fullName, setFullName] = useState('')
  const [endDate, setEndDate] = useState('')
  const [profits, setProfits] = useState(null)
  const [losses, setLosses] = useState(null)
  const [phone, setPhone] = useState('')

  const [listOfOwners, setList] = useState(getLocalStorage())

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const addFullName = (e) => {
    setFullName(e.target.value)
  }

  const addEndDate = (e) => {
    setEndDate(e.target.value)
  }

  const addProfits = (e) => {
    setProfits(e.target.value)
  }

  const addLosses = (e) => {
    setLosses(e.target.value)
  }

  const addPhone = (e) => {
    setPhone(e.target.value)
  }

  const addOwner = (newOwner) => {
    setList([...listOfOwners, newOwner])
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newOwner = {
  //     id: new Date().getTime().toString(),
  //     fullName,
  //     // endDate,
  //     // profits,
  //     // losses,
  //     // phone,
  //   }
  //   setList([...listOfOwners, newOwner])
  //   setFullName('')
  //   // setEndDate('')
  //   // setProfits('')
  //   // setLosses('')
  //   // setPhone('')
  //   // setModalShow(false)
  // }

  return (
    <OwnersContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        fullName,
        listOfOwners,
        endDate,
        profits,
        losses,
        phone,
        addFullName,
        addOwner,
        addEndDate,
        addProfits,
        addLosses,
        addPhone,
        // handleSubmit,
      }}
    >
      {children}
    </OwnersContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(OwnersContext)
}

export { OwnersContext, AppProvider }
