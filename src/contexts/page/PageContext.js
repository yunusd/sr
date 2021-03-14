import React, { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import reducers from "./reducers";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const initialState = {
        name: "home"
    };

    const [state, dispatch] = useReducer(reducers, initialState);
    const store = useMemo(() => [state, dispatch], [state]);

    return <PageContext.Provider value={store}>{children}</PageContext.Provider>;
};

PageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const usePageState = () => useContext(PageContext);
