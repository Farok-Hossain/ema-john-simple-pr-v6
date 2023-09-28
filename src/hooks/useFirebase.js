import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
    }

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({});
        })
    }
    // observe whether user auth state changed or not 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        signInUsingGoogle, 
        logOut
    }
}

export default useFirebase;