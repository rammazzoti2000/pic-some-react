import { BIG_EVERY, GRID_CLASS, WIDE_EVERY } from './constants';
import type { GridClass } from './types';

export const getGridClass = (index: number): GridClass => {
  if (index % BIG_EVERY === 0) return GRID_CLASS.big;
  if (index % WIDE_EVERY === 0) return GRID_CLASS.wide;
  return GRID_CLASS.small;
};
