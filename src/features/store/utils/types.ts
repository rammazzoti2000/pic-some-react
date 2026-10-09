export type Photo = {
  id: string;
  url: string;
  isFavorite: boolean;
};

export type StoreValue = {
  allPhotos: Photo[];
  cartItems: Photo[];
  toggleFavorite: (id: string) => void;
  addToCart: (photo: Photo) => void;
  removeFromCart: (id: string) => void;
  emptyCart: () => void;
};
