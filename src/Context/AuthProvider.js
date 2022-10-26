import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/Firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // google handle
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //github handle 
    const providerLoginGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // logOut setup area
    const logOut = () => {
        return signOut(auth)
    }

    // create user setup register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //create signIn setup area
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // useEffect setup 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, providerLogin, providerLoginGithub, logOut, createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;