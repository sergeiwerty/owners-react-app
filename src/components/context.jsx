import React, { useContext, useState } from 'react'

const OwnersContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  //
  const [fullName, setFullName] = useState('')
  // const [endDate, setEndDate] = useState('')
  // const [profits, setProfits] = useState(null)
  // const [losses, setLosses] = useState(null)
  // const [phone, setPhone] = useState('')

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const addFullName = (e) => {
    setFullName(e.target.value)
  }
  return (
    <OwnersContext.Provider
      value={{ isModalOpen, openModal, closeModal, fullName, addFullName }}
    >
      {children}
    </OwnersContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(OwnersContext)
}

export { OwnersContext, AppProvider }
