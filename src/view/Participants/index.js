import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from './components/pageHeader'

const Participants = () => {
  return (
    <Container>
      <Row>
        <Col sm = {12}>
          <PageHeader />
        </Col>
      </Row>
    </Container>
  )
}

export default Participants