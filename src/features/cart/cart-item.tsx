import { useHover } from '@/shared/hooks/use-hover';
import { useStore } from '@/features/store/hooks/use-store';
import type { Photo } from '@/features/store/utils/types';
import { ITEM_PRICE } from './utils/constants';
import { formatPrice } from './utils/utils';

type CartItemProps = {
  item: Photo;
};

export const CartItem = ({ item }: CartItemProps) => {
  const [hovered, ref] = useHover<HTMLElement>();
  const { removeFromCart } = useStore();

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
        aria-hidden="true"
      />

      <img src={item.url} width="130px" alt="" />
      <p>{formatPrice(ITEM_PRICE)}</p>
    </div>
  );
};
