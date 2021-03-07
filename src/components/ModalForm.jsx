import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
//
import './modalForm.css'
import close_btn from './pages/Overview/images/close_btn.png'
//
import { useGlobalContext } from './context'

// export const ModalForm = (props) => {
//   return (
//     <Modal
//       {...props}
//       size='lg'
//       aria-labelledby='contained-modal-title-vcenter'
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id='contained-modal-title-vcenter'>
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

export const Modal = () => {
  const { isModalOpen, closeModal, addFullName } = useGlobalContext()
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
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

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationCustom01'>
              <Form.Label>First name</Form.Label>
              {/* <Form.Control
                required
                type='text'
                placeholder='First name'
                defaultValue='Mark'
              /> */}
              <Form.Control
                required
                type='text'
                id='fullName'
                name='fullName'
                // value={fullName}
                placeholder='Name Surname'
                // onChange={(e) => setFullName(e.target.value)}
                onChange={(e) => addFullName(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationCustom02'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Last name'
                defaultValue='Otto'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type='text'
                  placeholder='Username'
                  aria-describedby='inputGroupPrepend'
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom03'>
              <Form.Label>City</Form.Label>
              <Form.Control type='text' placeholder='City' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustom04'>
              <Form.Label>State</Form.Label>
              <Form.Control type='text' placeholder='State' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustom05'>
              <Form.Label>Zip</Form.Label>
              <Form.Control type='text' placeholder='Zip' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label='Agree to terms and conditions'
              feedback='You must agree before submitting.'
            />
          </Form.Group>
          <Button type='submit'>Submit form</Button>
        </Form>
      </div>
    </div>
  )
}
