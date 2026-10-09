import type { GRID_CLASS } from '@/features/photos/utils/constants';

export type GridClass = (typeof GRID_CLASS)[keyof typeof GRID_CLASS];
