import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar.js';
import axios from 'axios';
import { Button, ListGroup, Row, Col} from 'react-bootstrap';
import { useAuth } from '../contexts/authContext.js';


export default function Community() {

    const {currentUser} = useAuth();

    const[selectedName, setSelectedName] = useState("");
    const[myFriends, setMyFriends] = useState([]);
    
    const[allUsers, setAllUsers] = useState({});
    const[allNames, setNames] = useState([]);

    async function getUsersName() {
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users.json`,
            withCredientials: true
           }).then((x) => {
                setNames(Object.values(x.data).map((x) => x.name));
                setAllUsers(x.data);
           })
    }

    async function addFriends(toupdate, param, value) {
        const obj = {};
        obj[`${param}`] = value;
        const result = await axios({
            method: 'patch',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${toupdate}.json`,
            data: obj
        });
        console.log("added friends");
    }

    function sortPoints(arr) {
        arr.sort(function(a, b) {
            return b.points - a.points;
          });
        console.log(arr);
    }



    async function handleAddFriend() {

        await getUsersName();

        let friend = Object.values(allUsers).filter((x) => x.name==selectedName);
        let me = Object.values(allUsers).filter((x) => x.email == currentUser.email);
        // console.log("friend" + JSON.stringify(friend));
        // console.log("me" + JSON.stringify(me));
        let theirFriends;
        let myFriends;

        friend[0].community ? theirFriends = friend[0].community : theirFriends = [];
        me[0].community ? myFriends = me[0].community : myFriends = [];

        console.log("theirFriends" + JSON.stringify(theirFriends));
        console.log("myfriends" + JSON.stringify(myFriends));
            
        
        let friendObj = {}
        let friendId = friend[0].uniqueID;
        friendObj["name"] = friend[0].name;
        friendObj["points"] = friend[0].Points;
        let myObj = {}
        let myId = me[0].uniqueID;
        myObj["name"] = me[0].name;
        myObj["points"] = me[0].Points;

        if (!theirFriends.some((friend) => friend.name == myObj.name)) {
            theirFriends.push(myObj);
        }
        if (!myFriends.some((friend) => friend.name == friendObj.name)) {
            myFriends.push(friendObj);
        }
        setMyFriends(myFriends);
        await addFriends(friendId, "community", theirFriends);
        await addFriends(myId, "community", myFriends);
        await getUsersName();
        
        }


    function setParentName(n) {
        setSelectedName(n);
    }

    useEffect(() => {
        getUsersName();
    }, [])

    return ( 
    <div className="community-container">
        {allNames && <SearchBar parentfunction={setParentName} names={allNames}/>}
        <h1>{selectedName}</h1>
        <Button onClick = { handleAddFriend } variant="primary">  Add Friend </Button>
        <ListGroup>
            <ListGroup.Item><h1 className="text-center">Leaderboard</h1></ListGroup.Item>
            {sortPoints(myFriends)}
            {myFriends ? myFriends.map((friend) => {
                return (
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>{friend.name}</h2></Col>
                            <Col className="text-right"><h2>{friend.points}</h2></Col>
                        </Row>                       
                    </ListGroup.Item>
                );
            }): null
        }
        </ListGroup>
        


    </div>);
    
}