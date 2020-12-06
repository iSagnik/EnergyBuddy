import Layout from '../components/layout';
import { Container, Col, Row, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useAuth } from '../contexts/authContext.js';
import axios from 'axios';

const MyProgressDash = () => {
    const { currentUser } = useAuth();
    const [ goals, setGoals ] = useState(null)

    const getUserGoals = async () => {
        let username = getUsername(currentUser.email);
        // let username = "tejasgmail";
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}/goalsList.json`,
            withCredientials: true
           })
           const response = await result
           console.log(response.data)
           if(response.data)
            setGoals(response.data);
            // console.log("respond.data" + response.data);
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    function calcPercent() {
        var tot = 0
        var Complete = 0
        for(const obj in goals ) {
            tot++;
            if(goals[obj]["isComplete"]) {
                Complete++;
            }

        }

        return (Complete/tot * 100)
    }

    useEffect(() => {
        getUserGoals();
    }, [])
    return (
        <Col xs = {5} className = "my-progress" >
            <h4>My Progress</h4>
            <ProgressBar variant="success" animated now={ calcPercent } />
        </Col>
    )
}

export default MyProgressDash;