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
  // const [fullName, setFullName] = useState('')
  // const [endDate, setEndDate] = useState('')
  // const [profits, setProfits] = useState(null)
  // const [losses, setLosses] = useState(null)
  // const [phone, setPhone] = useState('')
  //
  const [page, setPage] = useState(0)
  // const [currentPage, setCurrentPage] = useState(null)
  // const [owners, setOwners] = useState([])

  const [listOfOwners, setList] = useState(getLocalStorage())

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // const addFullName = (e) => {
  //   setFullName(e.target.value)
  // }

  // const addEndDate = (e) => {
  //   setEndDate(e.target.value)
  // }

  // const addProfits = (e) => {
  //   setProfits(e.target.value)
  // }

  // const addLosses = (e) => {
  //   setLosses(e.target.value)
  // }

  // const addPhone = (e) => {
  //   setPhone(e.target.value)
  // }

  const mergeOwners = (owners, listOfOwners) => {
    setAllOwners([...owners, ...listOfOwners])
  }
  //

  const handlePage = (index) => {
    setPage(index)
  }

  const handlePageAfterAdd = () => {
    setPage(paginate(allOwners).length - 1)
    // console.log(paginate(allOwners).length)
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
        // fullName,
        listOfOwners,
        // endDate,
        // profits,
        // losses,
        // phone,
        //
        handleChange,
        //
        // addFullName,
        addOwner,
        // addEndDate,
        // addProfits,
        // addLosses,
        // addPhone,
        // below data for owners page
        page,
        handlePage,
        handlePageAfterAdd,
        // currentPage,
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
