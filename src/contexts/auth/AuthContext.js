import React, { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import reducers from "./reducers";
import { storage } from "../../helpers/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    currentUser: storage.get("user"),
    userSettings: storage.get("userSettings"),
    isLoggedIn: !!storage.get("user"),
  };

  const [state, dispatch] = useReducer(reducers, initialState);
  const store = useMemo(() => [state, dispatch], [state]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthState = () => useContext(AuthContext);
