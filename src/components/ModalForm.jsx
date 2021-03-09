import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import InputGroup from 'react-bootstrap/InputGroup'
//
import './modalForm.css'
import close_btn from './pages/Overview/images/close_btn.png'
//
import { useGlobalContext } from './context'

export const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    fullName,
    addFullName,
    addOwner,
    addEndDate,
    endDate,
    profits,
    losses,
    phone,
    addProfits,
    addLosses,
    addPhone,
  } = useGlobalContext()

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)

    const newOwner = {
      id: new Date().getTime().toString(),
      fullName,
      endDate,
      profits,
      losses,
      phone,
    }

    addOwner(newOwner)

    // setFullName('')
    // // setEndDate('')
    // // setProfits('')
    // // setLosses('')
    // // setPhone('')
    // // setModalShow(false)
  }

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className={'modal-container '}>
        <button type='button' className='close_btn' onClick={closeModal}>
          <img src={close_btn} alt='close button' />
        </button>

        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom01'>
              <Form.Label>Full name</Form.Label>
              <Form.Control
                required
                type='text'
                name='fullName'
                placeholder='Name Surname'
                onChange={(e) => addFullName(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom02'>
              <Form.Label>End date</Form.Label>
              <Form.Control
                required
                type='text'
                name='endDate'
                placeholder='dd/mm/yy'
                onChange={(e) => addEndDate(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom03'>
              <Form.Label>Profits</Form.Label>
              <Form.Control
                required
                type='text'
                name='profits'
                placeholder='999.00'
                onChange={(e) => addProfits(e)}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid profits sum.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Losses</Form.Label>
              <Form.Control
                required
                type='text'
                name='losses'
                placeholder='999.00'
                onChange={(e) => addLosses(e)}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid losses sum.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom05'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type='text'
                name='phone'
                placeholder='+7 xxx xxx xx xx'
                onChange={(e) => addPhone(e)}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type='submit'>Submit form</Button>
        </Form>
      </div>
    </div>
  )
}
