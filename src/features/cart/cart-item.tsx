import { useHover } from '@/shared/hooks/use-hover';
import { useStore } from '@/features/store/hooks/use-store';
import type { Photo } from '@/features/store/utils/types';
import { ITEM_PRICE } from '@/features/cart/utils/constants';
import { formatPrice } from '@/features/cart/utils/utils';
import styles from '@/features/cart/cart.module.scss';

type CartItemProps = {
  item: Photo;
};

export const CartItem = ({ item }: CartItemProps) => {
  const [hovered, ref] = useHover<HTMLElement>();
  const { removeFromCart } = useStore();

  const iconClassName = `${hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'} ${styles.deleteIcon}`;

  return (
    <div className={styles.cartItem}>
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
