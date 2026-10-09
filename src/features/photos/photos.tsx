import { useStore } from '@/features/store/hooks/use-store';
import { PhotoCard } from '@/features/photos/photo-card';
import { getGridClass } from '@/features/photos/utils/utils';
import styles from '@/features/photos/photos.module.scss';

export const Photos = () => {
  const { allPhotos } = useStore();

  return (
    <main className={styles.photos}>
      {allPhotos.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} gridClass={getGridClass(index)} />
      ))}
    </main>
  );
};
