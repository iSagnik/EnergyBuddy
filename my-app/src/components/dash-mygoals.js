import React, { useState, useEffect } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import styled from 'styled-components'

const Styling = styled.div`
    color: white;
`

const MyGoalsDash = ( {goals} ) => {
    const [goalsData, setGoalData] = useState(null)

    const handleCompletion = ( currentUser) => {
        var temp = goals
        console.log(JSON.stringify(temp))
        temp[currentUser].isComplete = true
        setGoalData(temp)
        console.log("Complete")
    }

    if(!goalsData)
        setGoalData(goals)
    // useEffect(() => {
    //     setGoalData(goals)
    //     console.log(goalsData)
    //     console.log("updated")
    // }, [goalsData])

    return (
        <Col className = "my-goals">
            <Styling ><h2>My Goals</h2></Styling>
        
        <Row>
            <Styling >
            <h5>In Progress</h5>
            <br />
            Click to mark as complete
            </Styling>
            {/* {goals && goals["101"].displayName} */}
            <ListGroup>
                
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
            <ListGroup>
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
    </Col>
    )
}

export default MyGoalsDash