import { Music } from 'lucide-react';

const PlaylistCard = ({ name }: { name: string }) => {
  return (
    <div className="w-full p-2 hover:bg-accent rounded-lg h-14 items-center backdrop-blur-2xl cursor-pointer flex gap-x-2">
      <span className="size-10 flex items-center justify-center bg-secondary rounded-lg">
        <Music className="size-5 text-white" />
      </span>
      <div className="ml-1 flex flex-col">
        <h1 className="text-sm text-zinc-200">{name}</h1>
        <p className="text-xs text-zinc-300">3 songs</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
