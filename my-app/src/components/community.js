import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar.js';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function Community() {

    const[allUsers, setUsers] = useState([]);

    
    async function getUsers() {
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users.json`,
            withCredientials: true
           }).then((x) => {
               setUsers(Object.keys(x.data));
           }).then(console.log(allUsers));
    }

    async function handleAddFriend() {
        console.log("added friend");
    }


    useEffect(() => {
        getUsers();
    }, [])

    return ( 
    <div className="container">
        {allUsers && <SearchBar items={allUsers}/>}
        <Button onClick = { handleAddFriend } variant="primary">  Add Friend </Button>
    </div>);
    
}