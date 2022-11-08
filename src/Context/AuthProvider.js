import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

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