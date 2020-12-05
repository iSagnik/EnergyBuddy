import React, { useState } from 'react';
import Goal from './../component/goal.js';
import { Card, CardColumns, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export default function Goals() {
    const [goalsInfo, setGoals] = useState([]);

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


    return (
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
    )
}