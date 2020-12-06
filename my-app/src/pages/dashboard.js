import Layout from '../components/layout';
import { Container, Col, Row, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import MyGoalsDash from "../components/dash-mygoals.js"
import MyProgressDash from "../components/dash-myprogress.js"
import MyCircleDash from "../components/dash-mycircle.js"
import axios from 'axios';

const Dashboard = () => {

    const { currentUser } = useAuth();
    const [ goals, setGoals ] = useState(null)


    const getUserGoals = async () => {
        //let username = getUsername(currentUser.email);
        let username = "tejasgmail";
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}/goalsList.json`,
            withCredientials: true
           })
           const response = await result
            setGoals(response.data);
            // console.log("respond.data" + response.data);
    }

    useEffect(() => {
        getUserGoals();

    }, [])
    return (
        <Layout>
            <h1>Dashboard</h1>
            <Container fluid>
            <Row>
                <MyGoalsDash goals = {goals} />
                <MyProgressDash />
                <MyCircleDash />
            </Row>
            </Container>
        </Layout>
    )

}
export default Dashboard