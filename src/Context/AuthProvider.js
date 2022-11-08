import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    // provider login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    };

    const authInfo = {
        user,
        providerLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;