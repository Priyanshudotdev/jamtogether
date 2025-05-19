import { Folder, List, User } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="flex md:flex-col items-center justify-between md:justify-start gap-y-10 bg-[#771C1C] w-full h-16 md:w-20 md:h-screen bottom-0 md:top-0 md:left-0 z-50">
      {/* User Icon (Only for md and up) */}
      <div className="px-5 md:px-0 md:flex items-center w-full justify-center mt-2">
        <div className="user_profile_icon cursor-pointer w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <h1 className="text-[#EF4444]">C</h1>
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex md:flex-col gap-x-6 items-center justify-end md:justify-center w-full">
        <span className="hover:bg-[#9B1C1C] rounded-md cursor-pointer p-3 mx-2 md:p-4 md:mx-0">
          <List className="size-4" />
        </span>
        <span className="hover:bg-[#9B1C1C] rounded-md cursor-pointer p-4 hidden md:inline-flex">
          <Folder className="size-4" />
        </span>
        <span className="hover:bg-[#9B1C1C] rounded-md cursor-pointer p-4 hidden md:inline-flex">
          <User className="size-4" />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
