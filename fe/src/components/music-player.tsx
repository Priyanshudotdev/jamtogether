import { Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import type { SongType } from '../libs/types';

const TimePass = ({ song }: { song: SongType }) => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="./motion.mp4"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay to dim the video if needed */}
      <div className="fixed top-0 left-0 w-full h-full bg-secondary opacity-40 z-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-6">
        <div className="{bg-primary} backdrop-blur-2xl bg-opacity-80 rounded-lg p-6 flex flex-col gap-8 max-w-md w-full">
          {/* Song Details */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[13rem] h-[13rem] overflow-hidden rounded-md">
              <img
                src={song.thumbnail}
                className="w-full h-full object-cover"
                alt="music-image"
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
        </div>
      </div>
    </div>
  );
};

export default TimePass;
