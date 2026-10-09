import { getGridClass } from '@/features/photos/utils/utils';

describe('getGridClass', () => {
  it.each([
    [0, 'big'],
    [5, 'big'],
    [6, 'wide'],
    [30, 'big'],
    [1, 'small'],
  ])('index %i -> %s', (index, expected) => {
    expect(getGridClass(index)).toBe(expected);
  });
});
