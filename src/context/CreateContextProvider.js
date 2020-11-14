/* eslint-disable */

import React, { createContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

const AppContext = createContext();

function CreateContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => setPhotos(json))
  }, [])

  console.log(photos)

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
