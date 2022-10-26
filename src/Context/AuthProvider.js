import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google handle
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //github handle 
    const providerLoginGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logOut setup area
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // create user setup register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //create signIn setup area
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update User and profile
    const updateUserAndProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    // useEffect setup 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        providerLogin,
        providerLoginGithub,
        logOut,
        createUser,
        signIn,
        loading,
        updateUserAndProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;