import { useQuery } from '@tanstack/react-query';
import { fetchSongs } from '../services/MusicService';

const useMusic = (
  songName: string = 'harkirat singh',
  enabled: boolean = false,
) => {
  return useQuery({
    queryFn: () => fetchSongs(songName),
    queryKey: ['songs', songName],
    enabled: !!songName && enabled,
  });
};

export default useMusic;
