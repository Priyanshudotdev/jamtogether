import { Music, Plus, Search } from 'lucide-react';
import MusicVerticalCard from './music-vertical-card';

const MusicLibrary = () => {
  return (
    <div className="flex w-full flex-col bg-gradient-to-b from-[#450A0A] p-4 px-8 to-black">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-semibold">Your Library</h1>
        <span className="p-2 rounded-full">
          <Plus className="size-4 p-2" />
        </span>
      </div>
      <div className="w-full flex gap-5 items-center mt-6">
        <input
          type="text"
          name=""
          className=" relative h-10 w-full bg-transparent p-1 text-sm rounded-md border-[1px] pl-10 border-[#EF4444]/10"
          id=""
          placeholder="Search songs or past youtube url"
        />
        <span className="absolute ml-3 ">
          <Search className="size-4 text-zinc-300 " />
        </span>
        <p className="text-sm">Recents</p>
      </div>
      <div className="mt-5 flex flex-col gap-y-5">
        <h1 className="text-sm tracking-wide text-zinc-300 font-semibold ">
          Recent Songs
        </h1>
        <div className="flex flex-col gap-y-1">
          <MusicVerticalCard />
          <MusicVerticalCard />
          <MusicVerticalCard />
          <MusicVerticalCard />
          <MusicVerticalCard />
          <MusicVerticalCard />
        </div>
        <h1 className="text-sm tracking-wide text-zinc-300 font-semibold ">
          Your Playlist
        </h1>
        <div className="flex flex-col gap-y-1">
          {/* Card Component */}
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="w-full p-2 rounded h-14 items-center backdrop-blur-2xl hover:bg-[#601010]/80 cursor-pointer bg-[#2d0606] flex gap-x-2 ">
              <span className="size-10 flex items-center justify-center bg-[#601010] rounded">
                <Music className="mr-1 size-5" />
              </span>
              <div className="ml-1 flex flex-col">
                <h1 className="text-sm text-zinc-200">Favorites</h1>
                <p className="text-xs text-zinc-300 ">3 songs</p>
              </div>
            </div>
            <div className="w-full p-2 rounded h-14 items-center backdrop-blur-2xl hover:bg-[#601010]/80 cursor-pointer bg-[#2d0606] flex gap-x-2 ">
              <span className="size-10 flex items-center justify-center bg-[#601010] rounded">
                <Music className="mr-1 size-5" />
              </span>
              <div className="ml-1 flex flex-col">
                <h1 className="text-sm text-zinc-200">Chill Vibes</h1>
                <p className="text-xs text-zinc-300 ">3 songs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicLibrary;
