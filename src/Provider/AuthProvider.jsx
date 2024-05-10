import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const [loading, setLoad] = useState(true)
  const URL = 'http://localhost:5000'
  // create user 
  const createUser = (email, password) => {
    setLoad(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login 
  const Login = (email, password) => {
    setLoad(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Login with google 
  const loginWithGoogle = () => {
    setLoad(true);
    return signInWithPopup(auth, provider);
  }
  //update UserProfile 
  const updateUserProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }
  // Logout
  const Logout = () => {
    setLoad(true)
    signOut(auth)
  }
  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoad(false);
    })
    return () => currentUser();
  }, [])

  const info = { user, createUser, Login, Logout, loginWithGoogle, loading, updateUserProfile, URL }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;