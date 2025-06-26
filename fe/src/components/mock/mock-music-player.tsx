import { useRef, useState } from 'react';
import YouTube, { type YouTubePlayer, type YouTubeProps } from 'react-youtube';

const MusicPlayer = () => {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [data, setData] = useState<{
    title: string;
    thumbnai: string;
    // videoId?:strin
  }>({
    thumbnai: '',
    title: '',
  });

  const onReady: YouTubeProps['onReady'] = (e) => {
    playerRef.current = e.target;
  };

  const playVideo = () => {
    playerRef.current?.playVideo();
  };

  const pauseVideo = () => {
    playerRef.current?.pauseVideo();
  };

  const seekTo = (seconds: number) => {
    playerRef.current?.seekTo(seconds, true);
  };

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube
        // title="Hii there"
        loading="eager"
        videoId="dQw4w9WgXcQ"
        onReady={onReady}
        opts={opts}
      />
      <div className="flex items-center gap-x-2 ">
        <button
          className="bg-[#1a1a1a] p-2 rounded-md px-4 text-white cursor-pointer hover:opacity-[.7]"
          onClick={playVideo}
        >
          Play
        </button>
        <button
          className="bg-[#1a1a1a] p-2 rounded-md px-4 text-white cursor-pointer hover:opacity-[.7]"
          onClick={pauseVideo}
        >
          Pause
        </button>
        <button
          className="bg-[#1a1a1a] p-2 rounded-md px-4 text-white cursor-pointer hover:opacity-[.7]"
          onClick={() => seekTo(60)}
        >
          Seek to 1:00
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
