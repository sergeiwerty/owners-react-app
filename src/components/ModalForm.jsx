import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from 'react-bootstrap/Button'

import './bootstrap.min.css'

import { useGlobalContext } from './context'
import './modalForm.css'
import close_btn from './pages/Overview/images/close_btn.png'

export const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    addOwner,
    switchTrigger,
  } = useGlobalContext()

  switchTrigger()

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    endDate: Yup.string()
      .min(6, 'Too Short!')
      .max(8, 'Too Long')
      .matches(
        /^([0-3])([0-9]|)\/([0-1]|)([0-9]|)\/\d{2}$/,
        'Please enter valid input'
      )
      .required('Required'),
    profits: Yup.number()
      .typeError('Please enter numeric value')
      .moreThan(-0.01)
      .required('Required'),
    losses: Yup.number()
      .typeError('Please enter numeric value')
      .moreThan(-0.01)
      .required('Required'),
    phone: Yup.string()
      .matches(
        /^7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
        'Please enter valid pnone number'
      )
      .required('Required'),
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
          initialValues={{
            fullName: '',
            endDate: '',
            profits: '',
            losses: '',
            phone: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            addOwner(values)
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='fullName'>Full Name</label>
                  <Field
                    name='fullName'
                    placeholder='Name Surname'
                    className='form-control'
                    id='fullName'
                  />
                  {errors.fullName && touched.fullName ? (
                    <div className='warning-msg'>{errors.fullName}</div>
                  ) : null}
                </div>

                <div className='form-group col-md-6 '>
                  <label htmlFor='endDate'>End date</label>
                  <Field
                    name='endDate'
                    placeholder='dd/mm/yy'
                    className='form-control'
                    id='endDate'
                  />
                  {errors.endDate && touched.endDate ? (
                    <div className='warning-msg'>{errors.endDate}</div>
                  ) : null}
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='profits'>Profits</label>
                  <Field
                    name='profits'
                    placeholder='0.00'
                    className='form-control '
                    id='profits'
                  />
                  {errors.profits && touched.profits ? (
                    <div className='warning-msg'>{errors.profits}</div>
                  ) : null}
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='losses'>Losses</label>
                  <Field
                    name='losses'
                    placeholder='0.00'
                    className='form-control '
                    id='losses'
                  />
                  {errors.losses && touched.losses ? (
                    <div className='warning-msg'>{errors.losses}</div>
                  ) : null}
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='phone'>Phone number</label>
                  <Field
                    name='phone'
                    placeholder='7 XXX XXX XX XX'
                    className='form-control'
                    id='phone'
                  />
                  {errors.phone && touched.phone ? (
                    <div className='warning-msg'>{errors.phone}</div>
                  ) : null}
                </div>
              </div>
              <div className='row btn-row'>
                <div className='col text-center'>
                  <Button type='submit' disabled={!isValid}>
                    Submit form
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
