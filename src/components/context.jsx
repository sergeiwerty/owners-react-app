import React, { useContext, useState } from 'react'
import { owners } from '../ownersData'
import { paginate } from './pages/Overview/utils'

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

  //
  const [allOwners, setAllOwners] = useState(owners)
  const [ownersTrigger, setOwnersTrigger] = useState(false)
  //
  const [isModalOpen, setIsModalOpen] = useState(false)
  //
  // all person data
  const [owner, setOwner] = useState({
    fullName: '',
    endDate: '',
    profits: null,
    losses: null,
    phone: '',
  })

  //
  const [page, setPage] = useState(0)

  const [listOfOwners, setList] = useState(getLocalStorage())

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const mergeOwners = (owners, listOfOwners) => {
    setAllOwners([...owners, ...listOfOwners])
  }
  //

  const handlePage = (index) => {
    console.log(index)
    setPage(index)
  }

  const handlePageAfterAdd = () => {
    setPage(paginate(allOwners).length - 1)
  }

  const switchTrigger = () => {
    setOwnersTrigger(true)
  }

  // multiple inputs handle
  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name

    setOwner({ ...owner, [name]: value })
  }

  const addOwner = (owner) => {
    const newOwner = { ...owner, id: new Date().getTime().toString() }
    setList([...listOfOwners, newOwner])
  }

  return (
    <OwnersContext.Provider
      value={{
        owner,
        owners,
        allOwners,
        ownersTrigger,
        switchTrigger,
        mergeOwners,
        //
        isModalOpen,
        openModal,
        closeModal,
        //
        listOfOwners,
        handleChange,
        //
        addOwner,
        page,
        handlePage,
        handlePageAfterAdd,
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
