import React from 'react';
import SearchBar from './searchbar.js';
import axios from 'axios';

export default function Community() {

    
    async function getUsers() {
        const result = await axios({
            method: 'get',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users.json`,
            withCredientials: true
           })
           const response = await result
           console.log(response);
    }



    return ( <div></div>);
    
}