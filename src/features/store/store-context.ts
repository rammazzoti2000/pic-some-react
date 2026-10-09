import { createContext } from 'react';
import type { StoreValue } from '@/features/store/utils/types';

export const StoreContext = createContext<StoreValue | null>(null);
