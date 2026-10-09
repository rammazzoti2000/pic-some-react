import { useCallback, useMemo, useState, type ReactNode } from 'react';
import photosData from '@/data/photos.json';
import { StoreContext } from './store-context';
import { removeById, toggleFavoriteById } from './utils/utils';
import type { Photo, StoreValue } from './utils/types';

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [allPhotos, setAllPhotos] = useState<Photo[]>(photosData);
  const [cartItems, setCartItems] = useState<Photo[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setAllPhotos(prev => toggleFavoriteById(prev, id));
  }, []);

  const addToCart = useCallback((photo: Photo) => {
    setCartItems(prev => [...prev, photo]);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems(prev => removeById(prev, id));
  }, []);

  const emptyCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      allPhotos,
      cartItems,
      toggleFavorite,
      addToCart,
      removeFromCart,
      emptyCart,
    }),
    [allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart],
  );

  return <StoreContext value={value}>{children}</StoreContext>;
};
