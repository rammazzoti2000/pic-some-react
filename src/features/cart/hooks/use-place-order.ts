import { useState } from 'react';
import { ORDER_BUTTON_TEXT, ORDER_DELAY_MS } from '../utils/constants';

export const usePlaceOrder = (onComplete: () => void) => {
  const [buttonText, setButtonText] = useState<string>(ORDER_BUTTON_TEXT.idle);

  const placeOrder = () => {
    setButtonText(ORDER_BUTTON_TEXT.ordering);
    setTimeout(() => {
      setButtonText(ORDER_BUTTON_TEXT.idle);
      onComplete();
    }, ORDER_DELAY_MS);
  };

  return { buttonText, placeOrder };
};
