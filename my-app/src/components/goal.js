import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from "../contexts/goalsContext.js"

export default function Goal( props ) {
    const [toAdd, setToAdd] = useState(false)
    const {goalsToAdd, setGoals} = useContext(Context)
    
    {console.log("type of goalsToAdd in goal: " + typeof setGoals)}

    function setGoalsToAdd() {
        console.log("Add button")
        console.log(typeof goalsToAdd)
        !goalsToAdd.includes(props.uniqueId) && goalsToAdd.push(props.uniqueId)
        setGoals(goalsToAdd)
        setToAdd(true)
    }

    function setGoalsToRemove() {
        console.log("Delete button")
            //remove from list
        var temp = []
        for(var i = 0; i < goalsToAdd.length; i++) {
            if(goalsToAdd[i] !== props.uniqueId)
                temp.push(goalsToAdd[i])
        }
        setGoals(temp)
        setToAdd(false)
    }
    
    return ( 
        // <Context.Provider value = {goalsToAdd} >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{props.displayName}</Card.Title>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Subtitle className="mb-2 text-muted">{props.points} points</Card.Subtitle>
            <Card.Text>
                Description
            </Card.Text>

            {goalsToAdd && console.log("ID:   " + goalsToAdd.toString())}
            { !(goalsToAdd === `undefined` || goalsToAdd.includes(props.uniqueId)) && !toAdd ? <Button onClick = { setGoalsToAdd } variant="primary"> Add </Button> : <Button onClick = { setGoalsToRemove } variant="danger"> Remove </Button> }
            </Card.Body>
        </Card>
  );

}