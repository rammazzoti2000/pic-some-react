import { useStore } from '@/features/store/hooks/use-store';
import { PhotoCard } from './photo-card';
import { getGridClass } from './utils/utils';
import './photos.scss';

export const Photos = () => {
  const { allPhotos } = useStore();

  return (
    <main className="photos">
      {allPhotos.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} gridClass={getGridClass(index)} />
      ))}
    </main>
  );
};
