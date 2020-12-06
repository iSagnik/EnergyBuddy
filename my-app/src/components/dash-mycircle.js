import Layout from '../components/layout';
import { Container, Col, Row, ListGroup, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import Community from './community.js';

const MyCircleDash = () => {

    return (
        <Col className = "my-circle">
            <Card className="card-background">
            <h4>My Circle</h4>
            <Community/>
            </Card>
        </Col>
    )
}

export default MyCircleDash