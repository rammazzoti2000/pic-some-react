import { removeById, toggleFavoriteById } from '@/features/store/utils/utils';
import type { Photo } from '@/features/store/utils/types';

const photos: Photo[] = [
  { id: '1', url: 'a.jpg', isFavorite: false },
  { id: '2', url: 'b.jpg', isFavorite: true },
];

describe('toggleFavoriteById', () => {
  it('flips only the matching photo', () => {
    expect(toggleFavoriteById(photos, '1')).toEqual([
      { id: '1', url: 'a.jpg', isFavorite: true },
      { id: '2', url: 'b.jpg', isFavorite: true },
    ]);
  });
});

describe('removeById', () => {
  it('removes the matching photo', () => {
    expect(removeById(photos, '2')).toEqual([photos[0]]);
  });
});
