import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
   const [user , setUser] = useState(null);
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth , email , password)
}
const updateUserProfile = (name, photoURL) => {
   updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL
  }).then(() => {
    console.log("Profile updated successfully.");
  }).catch((error) => {
    console.log("Error updating profile: ", error);
  });
}
const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
const logout = () =>{
  return signOut(auth)
}

useEffect(()=>{
 const unsubscribe =onAuthStateChanged(auth, loggedUser => {
        console.log("loggeg user in side", loggedUser);
        setUser(loggedUser)
    })
    return () =>{
        unsubscribe()
    }
},[])
    const authinfo ={
         user,
         createUser,
         updateUserProfile,
         signIn,
         logout
    }

    return (
       <AuthContext.Provider value={authinfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;