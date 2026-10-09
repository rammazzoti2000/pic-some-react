import { createContext } from 'react';
import type { StoreValue } from './utils/types';

export const StoreContext = createContext<StoreValue | null>(null);
