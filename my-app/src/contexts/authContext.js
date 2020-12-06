import React, { useContext, useState, useEffect } from "react";
import { auth } from '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext); 
}

export function AuthProvider({ children }) {
    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    function login(username, password) {
        return auth.signInWithEmailAndPassword(username, password);    }

    function signup(username, password) {
        return auth.createUserWithEmailAndPassword(username, password);
    }

    function logout() {
        return auth.signOut();
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
            setLoading(false);
            // console.log(currentUser);   
        });
        return unsubscribe;
    }, []);

    const value = {currentUser, signup, login, logout};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


