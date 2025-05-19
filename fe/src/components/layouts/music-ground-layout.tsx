import { type ReactNode } from 'react';
import SideBar from '../side-bar';

const MusicGroundLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <SideBar />
      {children}
    </div>
  );
};

export default MusicGroundLayout;
