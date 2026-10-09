import type { GRID_CLASS } from './constants';

export type GridClass = (typeof GRID_CLASS)[keyof typeof GRID_CLASS];
