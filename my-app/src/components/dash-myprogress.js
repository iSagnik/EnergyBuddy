import Layout from '../components/layout';
import { Container, Col, Row, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const MyProgressDash = () => {

    return (
        <Col xs = {5} className = "my-progress" >
            <h4>My Progress</h4>
            <ProgressBar variant="success" animated now={45} />
        </Col>
    )
}

export default MyProgressDash;