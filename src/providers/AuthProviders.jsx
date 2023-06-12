import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { axiosSecure } from '../axiosInstance/axiosInstance';
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('access-token')
        setUser(null);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setUser((prev) => ({ ...prev, name, photo, role: 'student' }))
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    console.log(user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            // console.log('current user', currentUser);
            if (currentUser) {
                setUser({
                    email: currentUser?.email,
                    name: currentUser?.displayName,
                    photo: currentUser?.photoURL,
                });
                // console.log(currentUser)
                axiosSecure.post('/jwt', { email: currentUser.email })
                    .then(data => {

                        localStorage.setItem('access-token', data.data.token)
                        setUser((prev) => ({ ...prev, role: data.data.role }))
                        // setLoading(false);
                    })
                    .catch(err => {
                        // localStorage.removeItem('access-token');
                        console.log(err)
                        
                        // setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;