import { useHover } from '@/shared/hooks/use-hover';
import { useStore } from '@/features/store/hooks/use-store';
import type { Photo } from '@/features/store/utils/types';
import type { GridClass } from './utils/types';

type PhotoCardProps = {
  photo: Photo;
  gridClass: GridClass;
};

export const PhotoCard = ({ photo, gridClass }: PhotoCardProps) => {
  const [hovered, ref] = useHover<HTMLDivElement>();
  const {
    toggleFavorite, addToCart, cartItems, removeFromCart,
  } = useStore();

  const heartIcon = () => {
    if (photo.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(photo.id)} />;
    }
    if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(photo.id)} />;
    }
    return null;
  };

  const cartIcon = () => {
    const alreadyInCart = cartItems.some(item => item.id === photo.id);
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(photo.id)} />;
    }
    if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(photo)} />;
    }
    return null;
  };

  return (
    <div
      className={`${gridClass} image-container`}
      ref={ref}
    >
      <img src={photo.url} className="image-grid" alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};
