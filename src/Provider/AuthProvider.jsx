import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoad] = useState(true)


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

  // Login with google and github
  const loginWithGoogle = (provider) => {
    setLoad(true);
    return signInWithPopup(auth, provider);
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

  const info = { user, createUser, Login, Logout, loginWithGoogle, loading }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;