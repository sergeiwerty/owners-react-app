import React from 'react'
import Container from 'react-bootstrap/Container'
// import 'bootstrap/dist/css/bootstrap.min.css'

export const Layout = (props) => {
  return (
    <Container fluid className='justify-content-center'>
      {props.children}
    </Container>
  )
}
