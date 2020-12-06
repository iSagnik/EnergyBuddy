import React, { useState, useContext, useEffect } from 'react';
import Goal from '../components/goal.js';
import { CardColumns, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Layout from '../components/layout.js';
import Context from "../contexts/goalsContext.js"

function HandleGoalsButtonClick() {
    const {goalsToAdd} = useContext(Context)
    //push to database
    console.log("Button click successful")
}

function Goals() {
    // console.log(goalsToAdd)
    const [goalsInfo, setGoals] = useState([]);

    const readAllData = async () => {
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/goalInfo.json`,
            withCredientials: true
           })//.then((x) => setGoals(Object.values(x.data)));
           const response = await result
           setGoals(Object.values(response.data))
           console.log(JSON.stringify(response.data))
    }

    useEffect(() => {
        readAllData();
    }, [])
    
    return (
        <Layout>
            <Button onClick = { HandleGoalsButtonClick } variant="primary"> Done </Button>
                <CardColumns>
                {
                    goalsInfo &&
                    goalsInfo.map( card => (
                        <Goal 
                            displayName = {card.displayName} 
                            points = {card.points} 
                            uniqueId = {card.uniqueId}
                            info = {card.info}
                            attributes = {card.attributes}
                        /> 
                    )
                    )
                }
                </CardColumns>
        </Layout>
    )
}

export default Goals