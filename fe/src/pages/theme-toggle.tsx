import MusicLibrary from '../components/music-library';
import TimePass from '../components/music-player';
import { mockSong } from '../libs/mock-data';

const ThemeToggleScreen = () => {
  return (
    <div className="w-full flex min-h-screen bg-background">
      <TimePass song={mockSong} />
      <MusicLibrary />
    </div>
  );
};

export default ThemeToggleScreen;
