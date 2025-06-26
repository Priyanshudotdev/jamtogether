import { ArrowLeft, ArrowRightIcon, Search } from 'lucide-react';
import { useState } from 'react';
import PlaylistCard from './playlist-card';
import MusicVerticalCard from './song-card';

const MusicLibrary = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setIsSidebarActive((prev) => !prev);
    setIsHover(false);
  };

  return (
    <div className="relative z-10 w-full flex">
      {/* Sidebar Content */}
      {isSidebarActive && (
        <div className="flex flex-col w-full p-4 px-8 {bg-gradient-to-b from-black/60 to-black} backdrop-blur-xl">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-xl font-semibold text-white">Your Library</h1>
          </div>

          {/* Search */}
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

          {/* Recent Songs */}
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
              {[{ name: 'Favorites' }, { name: 'Chill Vibes' }].map((item) => (
                <PlaylistCard name={item.name} key={item.name} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle Icon - Top Right Corner */}
      <div
        className="absolute top-4 right-4 z-20 p-2 rounded-md backdrop-blur-lg bg-black/60 cursor-pointer hover:bg-black/80 transition"
        onClick={handleSidebarToggle}
      >
        {isSidebarActive ? (
          <ArrowRightIcon className="size-4 text-white" />
        ) : (
          <ArrowLeft className="size-4 text-white" />
        )}
      </div>
    </div>
  );
};

export default MusicLibrary;
