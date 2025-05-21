import { Music, Plus, Search } from 'lucide-react';
import MusicVerticalCard from './music-vertical-card';

const MusicLibrary = () => {
  return (
    <div className="flex w-full flex-col p-4 px-8 {bg-gradient-to-b to-black} bg-primary">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-semibold text-white">Your Library</h1>
        <span className="p-2 rounded-full hover:bg-black/20 cursor-pointer">
          <Plus className="size-4 text-white" />
        </span>
      </div>

      {/* Search Song */}
      <div className="w-full flex gap-5 items-center mt-6 relative">
        <input
          type="text"
          className="relative h-10 w-full bg-transparent p-1 text-sm rounded-md border-[1px] pl-10 text-white border-white/10"
          placeholder="Search songs or paste YouTube URL"
        />
        <span className="absolute ml-3">
          <Search className="size-4 text-zinc-300" />
        </span>
        <p className="text-sm text-white">Recents</p>
      </div>

      {/* Recent songs */}
      <div className="mt-5 flex flex-col gap-y-5">
        <h1 className="text-sm tracking-wide text-zinc-300 font-semibold">
          Recent Songs
        </h1>
        <div className="flex flex-col gap-y-1">
          {[...Array(6)].map((_, i) => (
            <MusicVerticalCard key={i} />
          ))}
        </div>

        {/* Playlist */}
        <h1 className="text-sm tracking-wide text-zinc-300 font-semibold">
          Your Playlist
        </h1>
        <div className="flex flex-col gap-y-1">
          {[{ name: 'Favorites' }, { name: 'Chill Vibes' }].map((item, idx) => (
            <div
              key={idx}
              className="w-full p-2 hover:bg-accent rounded-lg h-14 items-center backdrop-blur-2xl cursor-pointer flex gap-x-2"
            >
              <span className="size-10 flex items-center justify-center bg-secondary rounded-lg">
                <Music className="size-5 text-white" />
              </span>
              <div className="ml-1 flex flex-col">
                <h1 className="text-sm text-zinc-200">{item.name}</h1>
                <p className="text-xs text-zinc-300">3 songs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicLibrary;
