import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const { search } = useLocation();
  const songId = new URLSearchParams(search).get('id');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef<any>(null);

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      fs: 0,
    },
  };

  const onReady = (event: any) => {
    playerRef.current = event.target;
    setIsPlaying(true);
    setIsLoading(false);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const handleOnPlay = () => {
    setIsLoading(false);
  };

  if (!songId) {
    return (
      <div className="text-white bg-black h-screen flex items-center justify-center">
        No song ID provided
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#121212] to-black text-white flex flex-col items-center justify-center">
      <YouTube
        videoId={songId}
        opts={opts}
        onReady={onReady}
        onPlay={handleOnPlay}
      />

      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-[#1DB954] h-12 w-12 mb-4 animate-spin"></div>
          <p className="text-lg text-gray-300">Loading your song...</p>
        </div>
      ) : (
        <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg w-[90%] max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">Now Playing</h1>

          <div className="flex justify-center items-center gap-6">
            <button
              onClick={togglePlay}
              className="bg-[#1DB954] hover:bg-[#1ed760] transition-colors text-black rounded-full w-12 h-12 flex items-center justify-center shadow-md"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
