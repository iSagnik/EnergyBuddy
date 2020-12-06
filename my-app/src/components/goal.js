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
            {/* <Card.Link href="#">Add</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
            {goalsToAdd && console.log("ID:   " + goalsToAdd.toString())}
            { !(goalsToAdd == `undefined` || goalsToAdd.includes(props.uniqueId)) && !toAdd ? <Button onClick = { setGoalsToAdd } variant="primary"> Add </Button> : <Button onClick = { setGoalsToRemove } variant="danger"> Remove </Button> }
            </Card.Body>
        </Card>
        // </Context.Provider>
  );

}

   // async function setData() {
    //     const result = await axios({
    //         method: 'put',
    //         url: `https://sustainability-goals-default-rtdb.firebaseio.com/.json`,
    //         data: {
    //             goalInfo: {
    //             101: {
    //                 displayName: "Use Reusable Water Bottles",
    //                 info: "desc",
    //                 uniqueId: 101,
    //                 userList: [],
    //                 points: 5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             102: {
    //                 displayName: "Turn of the Lights if you’re not Using Room",
    //                 info: "desc",
    //                 uniqueId: 102,
    //                 userList: [],
    //                 points: 5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },      
    //             103: {
    //                 displayName: "Use a Solar Power Charger for your Phone, Laptop, etc. ",
    //                 info: "desc",
    //                 uniqueId: 103,
    //                 userList: [],
    //                 points: 5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             104: {
    //                 displayName: "Turn Off/Unplug Devices when you’re not Using it",
    //                 info: "desc",
    //                 uniqueId: 104,
    //                 userList: [],
    //                 points: 3,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             105: {
    //                 displayName: "Carpool or Bike or Use Public Transportation at least Once Today",
    //                 info: "desc",
    //                 uniqueId: 105,
    //                 userList: [],
    //                 points: 7,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             106: {
    //                 displayName: "Eat Organic Foods",
    //                 info: "desc",
    //                 uniqueId: 106,
    //                 userList: [],
    //                 points:7,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             107: {
    //                 displayName: "Recycle your Paper",
    //                 info: "desc",
    //                 uniqueId: 107,
    //                 userList: [],
    //                 points:5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             108: {
    //                 displayName: "Recycle your Bottles",
    //                 info: "desc",
    //                 uniqueId: 108,
    //                 userList: [],
    //                 points:5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             109: {
    //                 displayName: "Go Plogging!",
    //                 info: "desc",
    //                 uniqueId: 109,
    //                 userList: [],
    //                 points: 7,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             110: {
    //                 displayName: "Buy Produce from a Farmers Market ",
    //                 info: "desc",
    //                 uniqueId: 110,
    //                 userList: [],
    //                 points: 7,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             111: {
    //                 displayName: "Compost the Vegetable and Fruit Scraps you don’t Eat",
    //                 info: "desc",
    //                 uniqueId: 111,
    //                 userList: [],
    //                 points:5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             112: {
    //                 displayName: "Take Shorter Showers (under 8 minutes)",
    //                 info: "desc",
    //                 uniqueId: 112,
    //                 userList: [],
    //                 points:5,
    //                 attributes: { streak: 0, isDaily: true }
    //             },
    //             113: {
    //                 displayName: "Install Solar Panels in Your Home",
    //                 info: "desc",
    //                 uniqueId: 113,
    //                 userList: [],
    //                 points: 35,
    //                 attributes: { streak: 0, isDaily: false }
    //             },
    //             114: {
    //                 displayName: "Switch to an Electric Car",
    //                 info: "desc",
    //                 uniqueId: 114,
    //                 userList: [],
    //                 points: 40,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             115: {
    //                 displayName: "Plant a Tree",
    //                 info: "desc",
    //                 uniqueId: 115,
    //                 userList: [],
    //                 points: 20,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             116: {
    //                 displayName: "Start Composting",
    //                 info: "desc",
    //                 uniqueId: 116,
    //                 userList: [],
    //                 points: 15,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             117: {
    //                 displayName: "Grow and Harvest Your Own Vegetables",
    //                 info: "desc",
    //                 uniqueId: 117,
    //                 userList: [],
    //                 points: 20,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             118: {
    //                 displayName: "Support Your Local Bees and Plan a Pollinator Garden",
    //                 info: "desc",
    //                 uniqueId: 118,
    //                 userList: [],
    //                 points: 15,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             119: {
    //                 displayName: "Invest in Renewable Energy",
    //                 info: "desc",
    //                 uniqueId: 119,
    //                 userList: [],
    //                 points: 20,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             120: {
    //                 displayName: "Support Renewable Energy by Writing to Your Congressperson",
    //                 info: "desc",
    //                 uniqueId: 120,
    //                 userList: [],
    //                 points: 40,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             121: {
    //                 displayName: "Buy and Use Energy Efficient Lightbulbs",
    //                 info: "desc",
    //                 uniqueId: 121,
    //                 userList: [],
    //                 points: 15,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             122: {
    //                 displayName: "Unplug Your Devices When You Go On Vacation",
    //                 info: "desc",
    //                 uniqueId: 122,
    //                 userList: [],
    //                 points: 10,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             123: {
    //                 displayName: "Use Non-Toxic Cleaning Supplies",
    //                 info: "desc",
    //                 uniqueId: 123,
    //                 userList: [],
    //                 points: 20,
    //                 attributes: { streak: 0, isDaily: false }
    //             },  
    //             124: {
    //                 displayName: "Buy Items in Bulk",
    //                 info: "desc",
    //                 uniqueId: 124,
    //                 userList: [],
    //                 points: 10,
    //                 attributes: { streak: 0, isDaily: false }
    //             }
    //         }
    //     }});
    // }