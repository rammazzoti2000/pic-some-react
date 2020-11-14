/* eslint-disable */

import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

const AppContext = createContext();

function CreateContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  return (
    <AppContext.Provider value={{ photos }}>
      { children }
    </AppContext.Provider>
  );
}

CreateContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export { CreateContextProvider, AppContext };
