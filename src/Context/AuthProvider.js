import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    // create user for email and password login
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // provider login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    };

    // logOut
    const logOut = () => {
        return signOut(auth);
    };

    // on auth state change /set user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    const authInfo = {
        user,
        createUser,
        providerLogin,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;