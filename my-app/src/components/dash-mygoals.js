import React, { useState, useEffect } from 'react'
import { Col, Row, ListGroup, Card } from 'react-bootstrap'
import styled from 'styled-components'
import { useAuth } from '../contexts/authContext.js';
import axios from 'axios';

const Styling = styled.div`
    color: black;
    padding-left: 30px;
`

const RowStyle = styled.div`
    inline: block;
`

const MyGoalsDash = ( {goals} ) => {
    const [goalsData, setGoalData] = useState(goals)
    const [myPoints, setPoints] = useState(0)
    const { currentUser } = useAuth();

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    async function updateGoalsList(user, list) {
        let username = getUsername(user.email);
        //  let username = "tejasgmail";
        const obj = {goalsList: list};
        const result = await axios({
            method: 'patch',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}/.json`,
            withCredientials: true,
            data: obj
        });
    }

    async function getPoints( user ) {
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${user}/points.json`,
            withCredientials: true
           }).then((x) => {
            setPoints(parseInt(x.data))
       })
    }

    async function updatePoints(user, points) {
        let username = getUsername(user.email);
        //  let username = "tejasgmail";
        const obj = {Points: points};
        const result = await axios({
            method: 'patch',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${user}/.json`,
            withCredientials: true,
            data: obj
        });
    }

    const handleCompletion = ( user ) => {
        var temp = goals
        console.log(JSON.stringify(temp))
        temp[user].isComplete = true
        setGoalData(temp)
        updateGoalsList( currentUser, goalsData)
        //getPoints( currentUser )
        //var newPoints = parseInt(goalsData[user].points) + myPoints
        //updatePoints( currentUser, newPoints )
        console.log("comp ")
    }

    useEffect(() => {
        setGoalData(goals)
        console.log(goalsData)
        console.log("up  ated")
    }, [goalsData])

    return (
        <Col className = "my-goals">
            <Card className="card-background">
            <Styling ><h2>My Goals</h2></Styling>
            <Styling >
            <h5>In Progress</h5>
            <br />
            Click to mark as complete
            </Styling>
        <RowStyle>
        <Row>
            
            
            {/* {goals && goals["101"].displayName} */}
            <ListGroup className="extra-padding">
                
                {
                    goalsData ?
                    Object.keys( goalsData ).map( ( userGoal, i ) => {
                        if(goalsData[userGoal].displayName)
                            return (
                                <ListGroup.Item action onClick = { () => handleCompletion( userGoal ) }>
                                {/* { !(goalObj.isComplete) && goalObj.displayName} */}
                                {console.log("Name: " + goalsData[userGoal].displayName)}
                                { !goalsData[userGoal].isComplete && goalsData[userGoal].displayName }
                                </ListGroup.Item>
                            )
                        return (<></>)

                            
                    }
                    ) : <ListGroup.Item>No Goals in Progress</ListGroup.Item>
                }
            </ListGroup>
            
        </Row>
        <Row>
            <Styling>
                <h4>Completed</h4>
            </Styling>
            <ListGroup className="extra-padding">
            {
                    goalsData ?
                    Object.keys( goalsData ).map( ( userGoal, i ) => {
                        if(goalsData[userGoal].isComplete) {
                            return (
                                <ListGroup.Item action onClick = { handleCompletion }>
                                {/* { !(goalObj.isComplete) && goalObj.displayName} */}
                                {console.log("Name: " + goalsData[userGoal].displayName)}
                                { goalsData[userGoal].displayName }
                                </ListGroup.Item>
                            )
                        }
                        return (<></>)
                            
                    }
                    ) : <ListGroup.Item>No Goals Completed</ListGroup.Item>
                }
            </ListGroup>
        </Row>
        </RowStyle>
        </Card>
    </Col>
    )
}

export default MyGoalsDash