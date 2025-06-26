import { Folder, List, User } from 'lucide-react';
import React from 'react';

const SideBar: React.FC = () => {
  const navIcons = [
    { icon: List, label: 'List' },
    { icon: Folder, label: 'Folder' },
    { icon: User, label: 'User' },
  ];

  return (
    <div className="flex md:flex-col {bg-primary} items-center justify-between md:justify-start gap-y-10 w-full h-16 md:w-20 md:h-screen z-50">
      <div className="px-5 md:px-0 md:flex items-center w-full justify-center mt-2">
        <div className="cursor-pointer w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
          <h1 className="text-white">C</h1>
        </div>
      </div>

      <div className="flex md:flex-col gap-x-6 items-center justify-end md:justify-center w-full">
        {navIcons.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="rounded-md hover:bg-accent cursor-pointer p-3 md:p-4 mx-2 md:mx-0 transition-colors"
            >
              <Icon className="size-4 text-white" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
