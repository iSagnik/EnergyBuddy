import React, { useState, useEffect } from 'react';
import Goal from '../components/goal.js';
import { CardColumns, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Layout from '../components/layout.js';
import Context from "../contexts/goalsContext.js";
import { useAuth } from '../contexts/authContext';

function Goals() {
    // console.log(goalsToAdd)
    const [goalsInfo, setGoalsInfo] = useState([]);
    const [goalsToAdd, setGoals] = useState([]);
    const { currentUser } = useAuth();

    const readAllData = async () => {
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/goalInfo.json`,
            withCredientials: true
           })//.then((x) => setGoals(Object.values(x.data)));
           const response = await result
           setGoalsInfo(Object.values(response.data))
           console.log(JSON.stringify(response.data))
    }

    const getUserGoals = async () => {
        //let username = getUsername(currentUser.email);
        let username = "tejasgmail";
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}/goalsList.json`,
            withCredientials: true
           })
           const response = await result
            setGoals(response.data);
            // console.log("respond.data" + response.data);
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
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

    useEffect(() => {
        readAllData();
        getUserGoals();

    }, [])
    
    const HandleGoalsButtonClick = () => {
        //push to database
        updateGoalsList(currentUser, goalsToAdd);
        console.log(goalsToAdd.length)
        console.log("Button click successful")
    }
    
    return (
        <Layout>
            <Container>
                <Button onClick = { HandleGoalsButtonClick } variant="primary"> Done </Button>
                
                <CardColumns>
                    {console.log("type of goalsToAdd: " + typeof goalsToAdd)}
                <Context.Provider value = { {goalsToAdd, setGoals} } >
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
                </Context.Provider>
                </CardColumns>
            </Container>
            
        </Layout>
    )
}

export default Goals