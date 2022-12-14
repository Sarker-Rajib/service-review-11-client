import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user for email and password login
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Profile data
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };


    // login with email and password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // provider login
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    };

    // logOut
    const logOut = () => {
        localStorage.removeItem('jtoken')
        return signOut(auth);
    };

    // on auth state change /set user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    const authInfo = {
        user,
        createUser,
        logIn,
        providerLogin,
        logOut,
        loading,
        setLoading,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;