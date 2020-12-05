import React, { useState, useContext } from 'react';
import Goal from '../components/goal.js';
import { CardColumns, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Layout from '../components/layout.js';
import Context from "../contexts/goalsContext.js"

export default function Goals() {
    const {goalsToAdd} = useContext(Context)
    console.log(goalsToAdd)
    const [goalsInfo, setGoals] = useState([]);
    // const [goalsToAdd, setGoalsToAdd] = useState([]);

    async function readAllData() {
        // if (!loading) {
            const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/goalInfo.json`,
            withCredientials: true
        }).then((x) => setGoals(Object.values(x.data)));
        // setLoading(!loading);
        // }   
    }

    readAllData();
    const handleGoalsButtonClick = () => {
        //push to database
        console.log("Button click successful")
    }

    return (
        <Layout>
            <Button onClick = { handleGoalsButtonClick } variant="primary"> Done </Button>
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