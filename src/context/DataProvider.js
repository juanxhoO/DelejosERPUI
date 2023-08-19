import { createContext, useState } from "react";
import PropTypes from "prop-types";
import React from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({ id: 0 });
  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>{children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
