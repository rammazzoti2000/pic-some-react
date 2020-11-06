import React, { createContext } from 'react';
import propTypes from 'prop-types';

const AppContext = createContext();

function CreateContextProvider({ children }) {
  return (
    <AppContext.Provider value="">
      { children }
    </AppContext.Provider>
  );
}

CreateContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export { CreateContextProvider, AppContext };
