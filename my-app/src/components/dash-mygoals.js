import React, { useState, useEffect } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import axios from 'axios';

const MyGoalsDash = ( {goals} ) => {

    const[ goalData, setGoalData] = useState([])

    
    const getGoalObject = async () => {
        let goalsObjects = []
        for(var i = 0; i < goals.length; i++) {
            const result = await axios({
                method: 'get',
                url: `https://sustainability-goals-default-rtdb.firebaseio.com/goalInfo/${goals[i]}.json`,
                withCredientials: true
               })
               const response = await result
               const temp = response.data

               if(temp) {
                   console.log(temp.displayName)
                   goalsObjects.push(temp)
               } 
        }
        setGoalData(goalsObjects)
    }

    const handleCompletion = () => {
        //set isComplete for particular thing
    }

    useEffect(() => {
        getGoalObject()
        
    }, [])


    return (
        <Col className = "my-goals">
        <h4>My Goals</h4>
        <Row>
            <h6>In Progress</h6>
            <br />
            Click to mark as complete
            <ListGroup>
                {
                    goalData &&
                    goalData.map( ( userGoal, i ) => {
                            return (
                                <ListGroup.Item action onClick = { handleCompletion }>
                                    {/* { !(goalObj.isComplete) && goalObj.displayName} */}
                                    {console.log("Name: " + userGoal.displayName)}
                                    { userGoal.displayName }
                                </ListGroup.Item>
                            )
                    }
                    )
                }
            </ListGroup>
        </Row>
        {/* <Row>
            <h6>Completed</h6>
            Click to mark as complete
            <ListGroup>
                {
                    goals &&
                    goals.map( userGoal => (
                        <ListGroup.Item>
                            { userGoal.isComplete && userGoal.displayName }
                        </ListGroup.Item>
                    )
                    )
                }
            </ListGroup>
        </Row> */}
    </Col>
    )
}

export default MyGoalsDash