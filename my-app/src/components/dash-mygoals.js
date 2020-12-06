import React, { useState, useEffect } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'

const MyGoalsDash = ( {goals} ) => {
    const handleCompletion = () => {
        //set isComplete for particular thing
    }

    // useEffect(() => {
    //     getGoalObject()
        
    // }, [])

    //console.log("The user goal: " + JSON.stringify(Object.keys( goals )))
    return (
        <Col className = "my-goals">
        <h4>My Goals</h4>
        <Row>
            <h6>In Progress</h6>
            <br />
            Click to mark as complete
            {/* {goals && goals["101"].displayName} */}
            <ListGroup>
                
                {
                    goals ?
                    Object.keys( goals ).map( ( userGoal, i ) => {
                        return (
                            <ListGroup.Item action onClick = { handleCompletion }>
                            {/* { !(goalObj.isComplete) && goalObj.displayName} */}
                            {console.log("Name: " + goals[userGoal].displayName)}
                            { !goals[userGoal].isComplete && goals[userGoal].displayName }
                            </ListGroup.Item>
                        )

                            
                    }
                    ) : <ListGroup.Item>No Goals in Progress</ListGroup.Item>
                }
            </ListGroup>
            
        </Row>
        <Row>
            <h6>Completed</h6>
            Click to mark as complete
            <ListGroup>
            {
                    goals ?
                    Object.keys( goals ).map( ( userGoal, i ) => {
                        if(goals[userGoal].isComplete) {
                            return (
                                <ListGroup.Item action onClick = { handleCompletion }>
                                {/* { !(goalObj.isComplete) && goalObj.displayName} */}
                                {console.log("Name: " + goals[userGoal].displayName)}
                                { goals[userGoal].displayName }
                                </ListGroup.Item>
                            )
                        }
                        return (<></>)
                            
                    }
                    ) : <ListGroup.Item>No Goals Completed</ListGroup.Item>
                }
            </ListGroup>
        </Row>
    </Col>
    )
}

export default MyGoalsDash