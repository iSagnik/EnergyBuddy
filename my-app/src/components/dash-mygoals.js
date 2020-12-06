import React, { useState, useEffect } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'

const MyGoalsDash = ( {goals} ) => {
    
    // const getGoalObject = async () => {
    //     let goalsObjects = {}
        
    //     for(const obj in goals) {
    //         const result = await axios({
    //             method: 'get',
    //             url: `https://sustainability-goals-default-rtdb.firebaseio.com/goalInfo/${obj}.json`,
    //             withCredientials: true
    //            })
    //            const response = await result
    //            const temp = response.data

    //            if(temp) {
    //                console.log(temp.displayName)
    //                goalsObjects.push(temp)
    //            } 
    //     }
    //     setGoalData(goalsObjects)
    // }

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
            <ListGroup>
                {
                    goals ?
                    Object.keys( goals ).map( ( userGoal, i ) => {
                        <ListGroup.Item action onClick = { handleCompletion }>
                            {/* { !(goalObj.isComplete) && goalObj.displayName} */}
                            {console.log("Name: " + goals[userGoal].displayName)}
                            <h1>{ goals[userGoal].displayName }</h1>
                        </ListGroup.Item>
                            
                    }
                    ) : <ListGroup.Item>No Goals in Progress</ListGroup.Item>
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