import React, { useState, useEffect } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import axios from 'axios';

const MyGoalsDash = ( {goals} ) => {

    const[ goalData, setGoalData] = useState([])
    
    
    const getGoalObject = async ( goals ) => {
        console.log(goals)
        let goalsObjects = []
        
        for(const key in goals) {
            if(key) {
                const keyData = goals[key]
                const result = await axios({
                    method: 'get',
                    url: `https://sustainability-goals-default-rtdb.firebaseio.com/goalInfo/${keyData.id}.json`,
                    withCredientials: true
                   })//.then((x) => response =  x.data);
                   const response = await result
                   const temp = response.data
    
                   if(temp) {
                       temp["isComplete"] = keyData.isComplete
                       console.log(temp)
                       goalsObjects.push(temp)
                   }
            }
            
               
               //console.log(goalsObjects[i].displayName)
        }
        setGoalData(goalsObjects)
           //return (response.data)
        //    setGoalsInfo(Object.values(response.data))
        //    console.log(JSON.stringify(response.data))
    }

    async function updateGoalsList(user, list) {
        //let username = getUsername(user.email);
         let username = "tejasgmail";
        const obj = {goalsList: list};
        const result = await axios({
            method: 'patch',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}/.json`,
            withCredientials: true,
            data: obj
        });
    }
    
    const handleCompletion = () => {
        //set isComplete for particular thing
    }

    useEffect(() => {
        
        getGoalObject( goals )
        
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
                                    { !(userGoal.isComplete) && userGoal.displayName}
                                    {/* {console.log("Name: " + userGoal.displayName)}
                                    { userGoal.displayName } */}
                                </ListGroup.Item>
                            )
                    }
                    )
                }
            </ListGroup>
        </Row>
        <Row>
            <h6>Completed</h6>
            <br />
            Click to mark as complete
            <ListGroup>
                {
                    goalData &&
                    goalData.map( (userGoal, i) => (
                        <>
                            { userGoal.isComplete ? <ListGroup.Item> { userGoal.displayName } </ListGroup.Item> : <></> }
                        </>
  
                        )
                    )
                }
            </ListGroup>
        </Row>
    </Col>
    )
}

export default MyGoalsDash