import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider value={{ allPhotos }}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ContextProvider, Context };
