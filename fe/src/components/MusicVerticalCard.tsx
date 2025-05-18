const MusicVerticalCard = () => {
  return (
    <div className="w-full h-24 cursor-pointer bg-[#771C1C] hover:bg-[#891C1C] rounded-lg transition-colors">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#EAEAEA] size-[56px] rounded-md overflow-hidden">
            <img src="" alt="Cover" className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-base text-white truncate">
              Retro Waves
            </h1>
            <p className="text-sm text-zinc-300">Synthwave Collective</p>
          </div>
        </div>

        <div className="text-sm text-zinc-200">3:57</div>
      </div>
    </div>
  );
};

export default MusicVerticalCard;
