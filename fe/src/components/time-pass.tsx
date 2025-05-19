import { Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import type { SongType } from '../libs/types';

const TimePass = (props: { song: SongType }) => {
  return (
    <div className="h-full w-full flex bg-black">
      <div className="bg-[#450A0A] w-full flex p-4">
        <div className="bg-[#300707] w-full rounded-lg p-16 ">
          <div className="flex flex-col items-center justify-center">
            {/* Song Image */}
            <div className="bg-[#EAEAEA] size-[13rem] overflow-hidden rounded">
              <img
                src={props.song.thumbnail}
                className="w-full h-full"
                alt=""
              />
            </div>
            {/* Song Details */}
            <div className="text-center leading-[20px] mt-6">
              <h1 className="font-bold text-xl truncate">
                {props.song.title || 'Retro Waves'}
              </h1>
              <p className="text-zinc-400 text-sm">
                {props.song.publishedAt || 'Synthwave Collective'}
              </p>
            </div>
          </div>
          {/* Song Controls */}
          <div className="controls_container">
            <div className="music_line select-none flex flex-col w-full ">
              <div className="mt-10 text-xs text-zinc-200 flex justify-between items-center w-full">
                <p>0:00</p>
                <p>2:07</p>
              </div>
              <div className="">
                <div className="line bg-[#450A0A] min-w-full h-[4px] rounded mt-1 relative">
                  <span className="bg-[#EF4444] absolute inset-0 w-[200px] h-[4px] rounded-full">
                    <button className="circle w-4 h-4 -bottom-[6px] left-[195px] rounded-full bg-[#EF4444] absolute"></button>
                  </span>
                </div>
              </div>
            </div>
            <div className="controls flex w-full justify-center mt-12 items-center gap-x-4">
              <button className="p-3 cursor-pointer hover:bg-[#3E0C0C] rounded ">
                <Shuffle className="size-4 text-zinc-300 " />
              </button>
              <button className="p-3 cursor-pointer hover:bg-[#3E0C0C] rounded ">
                <SkipBack className="size-4 text-zinc-300 " />
              </button>
              <button className="p-4 bg-[#3E0C0C] cursor-pointer rounded-full ">
                <Play className="size-4 text-zinc-300 " />
              </button>
              <button className="p-3 cursor-pointer hover:bg-[#3E0C0C] rounded ">
                <SkipForward className="size-4 text-zinc-300 " />
              </button>
              <button className="p-3 cursor-pointer hover:bg-[#3E0C0C] rounded ">
                <Repeat className="size-4 text-zinc-300 " />
              </button>
            </div>
            <div className="volume"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePass;
