import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const [loading, setLoad] = useState(true)
  const URL = 'https://b9a11-server-side.vercel.app'
  // https://b9a11-server-side.vercel.app/
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

  // Logout
  const Logout = () => {
    setLoad(true)
    signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      const UserEmail = currentUser?.email || user?.email;
      setLoad(false);
      const loggedUser = { email: UserEmail }
      // console.log(loggedUser);
      // token
      if (currentUser) {
        axios.post(`${URL}/jwt`, loggedUser, { withCredentials: true })
          .then(res => {

            console.log("token :", res.data);
          })

      }
      else {
        axios.post(`${URL}/logout`, loggedUser, { withCredentials: true })
          .then(res => {
            console.log("token :", res.data);
          })
      }
    })
    return () => unSubscribe();
  }, [])

  const info = { user, createUser, Login, Logout, loginWithGoogle, loading, URL }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;