import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
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
    //
    owner,
    handleChange,
    //

    // fullName,
    // addFullName,
    addOwner,
    // addEndDate,
    // endDate,
    // profits,
    // losses,
    // phone,
    // addProfits,
    // addLosses,
    // addPhone,
    //
    switchTrigger,
    handlePageAfterAdd,
  } = useGlobalContext()

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    // const form = event.currentTarget
    // if (form.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation()
    // }

    // setValidated(true)

    // рефакторинг для манипулирования несколькими инпутами
    // const newOwner = {
    //   id: new Date().getTime().toString(),
    //   fullName,
    //   endDate,
    //   profits,
    //   losses,
    //   phone,
    // }

    addOwner(owner)
    //

    // setFullName('')
    // // setEndDate('')
    // // setProfits('')
    // // setLosses('')
    // // setPhone('')
    // // setModalShow(false)
    // handlePageAfterAdd()
  }

  switchTrigger()

  // validation schema
  const schema = Yup.object().shape({
    fullName: Yup.number().typeError('Должно быть числом').required('Error!'),
    // endDate: yup.string().required(),
    // profits: yup.string().required(),
    // losses: yup.string().required(),
    // phone: yup.string().required(),
  })

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

        <Formik
          validationSchema={schema}
          // onSubmit={(e) => handleSubmit(e)}
          onSubmit={console.log('ratatatata')}
          // onChange={(e) => handleChange(e)}
          initialValues={{
            fullName: '',
            // endDate: '',
            // profits: '',
            // losses: '',
            // phone: '',
          }}
          validateOnBlur
        >
          {({
            // handleSubmit,
            // handleChange,
            handleBlur,
            // values,
            touched,
            // isValid,
            errors,
          }) => (
            <Form
              //
              // делает кнопку неактивной
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Row>
                <Form.Group as={Col} md='10' controlId='validationCustom01'>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    // required
                    type='text'
                    name='fullName'
                    value={owner.fullName}
                    placeholder='Name Surname'
                    // onChange={(e) => addFullName(e)}
                    // onChange={handleChange}
                    onChange={(e) => handleChange(e)}
                    // onBlur={handleBlur}
                    isValid={touched.fullName && !errors.fullName}

                    // onBlur={handleBlur}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group as={Col} md='6' controlId='validationCustom02'>
                  <Form.Label>End date</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    name='endDate'
                    value={owner.endDate}
                    placeholder='dd/mm/yy'
                    // onChange={(e) => addEndDate(e)}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group> */}
              </Form.Row>
              {/* <Form.Row>
                <Form.Group as={Col} md='6' controlId='validationCustom03'>
                  <Form.Label>Profits</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    name='profits'
                    value={owner.profits}
                    placeholder='999.00'
                    // onChange={(e) => addProfits(e)}
                    onChange={(e) => handleChange(e)}
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
                    value={owner.losses}
                    placeholder='999.00'
                    // onChange={(e) => addLosses(e)}
                    onChange={(e) => handleChange(e)}
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
                    value={owner.phone}
                    placeholder='+7 xxx xxx xx xx'
                    // onChange={(e) => addPhone(e)}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please provide phone number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row> */}
              {/* {touched.name && errors.name && <p> {errors.name}</p>} */}
              <Button type='submit'>Submit form</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
