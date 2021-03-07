import React, { useState, useContext } from 'react'

const OverviewContex = React.createContext()

const [modalShow, setModalShow] = useState(false)
const [fullName, setFullName] = useState('')
const [endDate, setEndDate] = useState('')
const [profits, setProfits] = useState(null)
const [losses, setLosses] = useState(null)
const [phone, setPhone] = useState('')
