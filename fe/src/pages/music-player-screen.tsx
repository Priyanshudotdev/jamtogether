import { useLocation, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import axios from 'axios';

const MusicPlayer = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const songId = new URLSearchParams(search).get('id');

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
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
    const duration = event.target.getDuration();
    setDuration(duration);
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

  const handleOnPlay = () => setIsLoading(false);

  useEffect(() => {
    if (isPlaying && playerRef.current) {
      intervalRef.current = window.setInterval(() => {
        const time = playerRef.current.getCurrentTime();
        setCurrentTime(time);
      }, 500);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    playerRef.current.seekTo(time, true);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/music/search?q=${query}`,
      );
      setResults(res.data || []);
    } catch (err) {
      console.error('Error fetching search results:', err);
    }
  };

  const handleSongSelect = (id: string) => {
    navigate(`?id=${id}`);
    setResults([]);
    setQuery('');
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#121212] to-black text-white flex flex-col items-center p-4">
      {/* 🔍 Search Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search song..."
          className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="mt-2 w-full py-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold rounded-lg"
        >
          Search
        </button>

        {results.length > 0 && (
          <ul className="mt-3 bg-zinc-900 rounded-lg p-3 max-h-64 overflow-y-auto">
            {results.map((song, idx) => (
              <li
                key={idx}
                className="p-2 hover:bg-zinc-700 cursor-pointer rounded-md"
                onClick={() => handleSongSelect(song.videoId)}
              >
                {song.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 🎵 Player Section */}
      {songId ? (
        <>
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

              <div className="flex justify-center items-center gap-6 mb-4">
                <button
                  onClick={togglePlay}
                  className="bg-[#1DB954] hover:bg-[#1ed760] transition-colors text-black rounded-full w-12 h-12 flex items-center justify-center shadow-md"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="range"
                  min={0}
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full accent-[#1DB954] h-1 rounded-lg appearance-none cursor-pointer bg-gray-600"
                />
                <div className="flex justify-between text-sm text-zinc-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-zinc-400 mt-12">No song selected</div>
      )}
    </div>
  );
};

export default MusicPlayer;
