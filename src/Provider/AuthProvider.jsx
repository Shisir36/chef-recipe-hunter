import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
 const [user , setUser] = useState(null);
 const [loading, setLoading] = useState(true)
const createUser = (email,password) => {
    setLoading(true)
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
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const logout = () =>{
    setLoading(true)
  return signOut(auth)
}
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  };
 const githubProvider = new GithubAuthProvider() 
 const signInWithGithub = () => {
    setLoading(true)
   return signInWithPopup(auth, githubProvider)
  };

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser)
         setLoading(false)
    })
    return () =>{
      return  unsubscribe()
    }
},[])
    const authinfo ={
         user,
         createUser,
         updateUserProfile,
         signIn,
         logout,
         signInWithGoogle,
         loading,
         signInWithGithub
    }

    return (
       <AuthContext.Provider value={authinfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;