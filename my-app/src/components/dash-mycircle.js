import Layout from '../components/layout';
import { Container, Col, Row, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import Community from './community.js';

const MyCircleDash = () => {

    return (
        <Col className = "my-circle">
            <h4>My Circle</h4>
            <Community/>
        </Col>
    )
}

export default MyCircleDash