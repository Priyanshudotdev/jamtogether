import { Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import type { SongType } from '../libs/types';

const TimePass = ({ song }: { song: SongType }) => {
  return (
    <div className="h-full w-full flex bg-black">
      <div className="bg-primary w-full flex p-4">
        <div className="bg-secondary w-full rounded-lg p-6 flex flex-col gap-8">
          {/* Song Details */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white size-[13rem] overflow-hidden rounded-md">
              <img
                src={song.thumbnail}
                className="w-full h-full object-cover "
                alt="msuci-image"
              />
            </div>
            <div className="text-center leading-[20px] mt-6">
              <h1 className="font-bold text-xl truncate text-white">
                {song.title || 'Retro Waves'}
              </h1>
              <p className="text-zinc-400 text-sm">
                {song.publishedAt || 'Synthwave Collective'}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="music_line select-none flex flex-col w-full">
            <div className="text-xs text-zinc-200 flex justify-between items-center w-full">
              <p>0:00</p>
              <p>2:07</p>
            </div>
            <input
              type="range"
              className="w-full accent-accent bg-primary h-[5px] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Playback Controls */}
          <div className="controls flex w-full justify-center items-center gap-x-4">
            <button className="w-10 h-10 hover:bg-accent rounded flex items-center justify-center cursor-pointer">
              <Shuffle className="size-4 text-zinc-300" />
            </button>
            <button className="w-10 h-10 hover:bg-accent rounded flex items-center justify-center cursor-pointer">
              <SkipBack className="size-4 text-zinc-300" />
            </button>
            <button className="w-12 h-12 rounded-full bg-accent hover:bg-accent/50 flex items-center justify-center cursor-pointer">
              <Play className="size-4 text-zinc-300" />
            </button>
            <button className="w-10 h-10 hover:bg-accent rounded flex items-center justify-center cursor-pointer">
              <SkipForward className="size-4 text-zinc-300" />
            </button>
            <button className="w-10 h-10 hover:bg-accent rounded flex items-center justify-center cursor-pointer">
              <Repeat className="size-4 text-zinc-300" />
            </button>
          </div>

          {/* Motion Video */}
          <div className="relative overflow-hidden rounded-lg mt-6 shadow-xl">
            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              src="./motion.mp4"
              className="w-full max-h-[300px] object-cover"
            />

            <div className="absolute inset-0 bg-secondary opacity-30 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePass;
