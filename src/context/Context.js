import React, { useState, useEffect } from 'react';
// import { reactLocalStorage } from 'reactjs-localstorage';
import PropTypes from 'prop-types';

const Context = React.createContext();

function ContextProvider({ children }) {
  const initialValue = window.localStorage.getItem('cartItems') || [];

  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // const state = { name: 'zak' };
  // const stateString = JSON.stringify(state);
  // localStorage.setItem('my_saved_state', stateString);
  //
  // const returnedStateString = localStorage.getItem('my_saved_state');
  // const returnedStateObject = JSON.parse(returnedStateString);
  //
  // console.log('stringified object: ', returnedStateString);
  // console.log('parse object: ', returnedStateObject);
  // console.log(state);

  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems(prevState => [...prevState, newItem]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider value={{
      allPhotos,
      toggleFavorite,
      cartItems,
      addToCart,
      removeFromCart,
      emptyCart,
    }}
    >
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ContextProvider, Context };
