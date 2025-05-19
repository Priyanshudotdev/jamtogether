const MusicVerticalCard = () => {
  return (
    <div className="w-full h-14 cursor-pointer focus:bg-[#480c0c] hover:bg-[#601010] rounded-lg transition-colors">
      <div className="flex items-center justify-between h-full px-2 pr-10">
        <div className="flex items-center gap-4">
          <div className="bg-[#EAEAEA] size-10 rounded-md overflow-hidden">
            <img src="" alt="Cover" className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-sm text-white truncate">
              Retro Waves
            </h1>
            <p className="text-xs text-zinc-300">Synthwave Collective</p>
          </div>
        </div>

        <div className="text-sm text-zinc-200">3:57</div>
      </div>
    </div>
  );
};

export default MusicVerticalCard;
