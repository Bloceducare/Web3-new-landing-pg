import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from './components/pageHeader'
import ParticipantsContainer from './components/participantsContainer'
import styles from './index.module.css'

const Participants = () => {
  return (
    <Container>
      <Row>
        <Col sm = {12}>
          <PageHeader />
        </Col>
      </Row>
      <Row>
        <Col sm = {12}>
          <ParticipantsContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default Participants