import type { Photo } from '@/features/store/utils/types';

export const toggleFavoriteById = (photos: Photo[], id: string): Photo[] =>
  photos.map(photo => (photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo));

export const removeById = (photos: Photo[], id: string): Photo[] =>
  photos.filter(photo => photo.id !== id);
