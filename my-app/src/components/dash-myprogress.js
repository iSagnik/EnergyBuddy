import Layout from '../components/layout';
import { Container, Col, Row, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
 

const MyProgressDash = () => {

    // const { currentUser } = useAuth();

    // function getUsername(email) {
    //     let em_split = email.split('@');
    //     let username = em_split[0]+em_split[1].split('.')[0];
    //     return username;
    // }

    // async function getName() {
    //     let username = getUsername(currentUser.email);
    //     // let username = "tejasgmail";
    //     const result = await axios({
    //         method: 'get',
    //         url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}/goalsList.json`,
    //         withCredientials: true
    //     });
    
    //     return username;
    // }

    // console.log("before");
    // let response = await getName();
    // console.log("after")
    // setGoals(response.data);
    // console.log("event after")
    // console.log("respond.data" + response.data);

    return (
        <Col xs = {5} className = "my-progress" >
            <h4>My Progress</h4>
            <ProgressBar variant="success" animated now={45} />
        </Col>
    )
}

export default MyProgressDash;