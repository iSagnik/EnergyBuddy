import Layout from '../components/layout';
import { Container, Col, Row, ListGroup, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import MyGoalsDash from "../components/dash-mygoals.js"
import MyProgressDash from "../components/dash-myprogress.js"
import MyCircleDash from "../components/dash-mycircle.js"
import axios from 'axios';
import styled from 'styled-components'

const Styling = styled.div`
    color: white;
`
function getUsername(email) {
    let em_split = email.split('@');
    let username = em_split[0]+em_split[1].split('.')[0];
    return username;
}


const Dashboard = () => {

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

    useEffect(() => {
        getUserGoals();

    }, [])
    return (
        <Layout>
            <Styling><h1>Dashboard</h1></Styling>
            <Container fluid className="dashboard-container">
            <Row>
                {console.log(goals)}
                <MyGoalsDash goals = {goals} />
                <MyProgressDash />
                <MyCircleDash />
            </Row>
            </Container>
        </Layout>
    )

}
export default Dashboard;