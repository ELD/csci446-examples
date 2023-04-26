import React, { useContext, useState } from 'react';
import { meRequest, signinRequest, signoutRequest } from './authService';

const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  const signin = async (loginCredentials, callback) => {
    console.log(loginCredentials);
    try {
      const user = await signinRequest(loginCredentials);
      console.log(user);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
    callback();
  };

  const signout = async (callback) => {
    try {
      await signoutRequest();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
    callback();
  };

  const refresh = async() => {
    // only refresh if the user is null
    if (user) {
      return;
    }

    try {
      const user = await meRequest();
      setUser(user);
      return true;
    } catch (e) {
      setUser(null);
    }
    return false;
  }

  const value = { user, signin, signout, refresh };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  if (AuthContext !== null) {
    return useContext(AuthContext);
  }
  throw Error('cannot useAuth outside of `AuthProvider` context');
}
