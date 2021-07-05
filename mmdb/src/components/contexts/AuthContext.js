// import packages / files
import React, {useContext, useState, useEffect} from "react";
import {auth} from "../../firebase";

// create context object
const AuthContext = React.createContext();

// export context
export function useAuth() {
  return useContext(AuthContext);
}

// create provider function
export function AuthProvider({children}) {
  // set states
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // create user with form data
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  /* when auth state changes i.e
  / user logs in, update current  
  / user data
  */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // set key
  const value = {
    currentUser,
    signup,
  };

  // return value data to provider
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
