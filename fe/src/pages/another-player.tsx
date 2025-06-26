import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface PlayerState {
  url: string;
  playing: boolean;
  volume: number;
  muted: boolean;
  played: number;
  duration: number;
  seeking: boolean;
}

const initialState: PlayerState = {
  url: '',
  playing: false,
  volume: 1,
  muted: false,
  played: 0,
  duration: 0,
  seeking: false,
};

export default function App() {
  const playerRef = useRef<ReactPlayer>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<PlayerState>(initialState);
  const [thumbnailImage, setThumbnailImage] = useState('');

  const handlePlayPause = () =>
    setState((s) => ({ ...s, playing: !s.playing }));

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, volume: parseFloat(e.target.value) }));
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, played: parseFloat(e.target.value) }));
  };

  const handleSeekMouseDown = () => setState((s) => ({ ...s, seeking: true }));

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, seeking: false }));
    playerRef.current?.seekTo(parseFloat((e.target as HTMLInputElement).value));
  };

  const handleProgress = (progress: { played: number }) => {
    if (!state.seeking) {
      setState((s) => ({ ...s, ...progress }));
    }
  };

  const handleDuration = (duration: number) => {
    setState((s) => ({ ...s, duration }));
  };

  const handleLoadCustomUrl = () => {
    const url = urlInputRef.current?.value;
    const videoId: string | undefined = url?.split('=')[1];
    if (url) {
      setState((s) => ({ ...s, url, played: 0 }));
      setThumbnailImage(
        `https://img.youtube.com/vi/${videoId || 'nothing'}/hqdefault.jpg`,
      );
    }
  };

  useEffect(() => {
    setState((s) => ({ ...s, volume: 1 }));
  }, []);

  const { url, playing, volume, played, duration } = state;

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">🎵 Spotify-style Audio Player</h1>

      <div className="w-full max-w-lg mb-4">
        <input
          ref={urlInputRef}
          type="text"
          placeholder="Enter audio/video URL"
          className="w-full px-4 py-2 rounded-md border text-white border-gray-300"
        />
        <button
          onClick={handleLoadCustomUrl}
          className="mt-2 w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
        >
          Load
        </button>
      </div>

      <div className="w-full max-w-lg bg-gray-800 rounded-xl p-4 shadow-lg">
        <div className="aspect-video rounded overflow-hidden mb-4">
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={playing}
            volume={volume}
            muted={false}
            width="100%"
            height="100%"
            onProgress={handleProgress}
            onDuration={handleDuration}
            style={{ display: 'none' }}
          />

          <img
            src={thumbnailImage}
            alt="Thumbnail"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePlayPause}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          <div className="text-sm text-gray-300">
            {Math.floor(played * duration)}s / {Math.floor(duration)}s
          </div>
        </div>

        <div className="mb-4">
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-300">Volume</label>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
