import React, { createContext } from 'react';

import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
 const auth =getAuth(app);
    const authInfo ={

    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;