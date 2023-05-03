import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
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
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  

useEffect(()=>{
 const unsubscribe =onAuthStateChanged(auth, loggedUser => {
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
         logout,
         signInWithGoogle
    }

    return (
       <AuthContext.Provider value={authinfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;