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
               })//.then((x) => response =  x.data);
               const response = await result
               const temp = response.data
               //const stringObj = JSON.stringify(temp)
               //console.log(stringObj)
               //const tempJson = JSON.parse(stringObj)
               //console.log(tempJson)
               if(temp) {
                   console.log(temp.displayName)
                   goalsObjects.push(temp)
               }
               
               //console.log(goalsObjects[i].displayName)
        }
        setGoalData(goalsObjects)
           //return (response.data)
        //    setGoalsInfo(Object.values(response.data))
        //    console.log(JSON.stringify(response.data))
    }

    const handleCompletion = () => {
        //set isComplete for particular thing
    }

    // async function helpPlis () {
    //     console.log(goals.length)
    //     if(goals) {
    //         for(var i = 0; i < goals.length; i++) {
    //             console.log(goals[i])
    //             const temp = await getGoalObject( goals[idx] )
    //             goalObjectsList.push( temp )
    //             console.log(goalObjectsList[i])
    //         }
    //     }
        
    //     console.log("Temp: " + temp)
    //     setGoalData(goalObjectsList)
    // }

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