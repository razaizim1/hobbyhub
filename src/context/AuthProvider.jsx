import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { useEffect, useState } from 'react';
const AuthProvider = ({ children }) => {

    // set user
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Update User Profile
    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData);
    }

    // signin with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Provider Instance
    const googleProvider = new GoogleAuthProvider();

    // Sign In with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    };

    // create an observer for user login state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('has user', currentUser);
            setUserInfo(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    // logOut User
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    };

    // set values in object
    const user = {
        createUser,
        updateUserProfile,
        signInWithGoogle,
        signInUser,
        userInfo,
        setUserInfo,
        loading,
        logout
    }
    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;