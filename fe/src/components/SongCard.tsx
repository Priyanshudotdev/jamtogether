import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SongType } from '../types/SongType';

interface MusicCardProps {
  song: SongType;
  onPlay?: (videoId: string) => void;
}

const MusicCard: React.FC<MusicCardProps> = ({ song, onPlay }) => {
  const navigate = useNavigate();

  const [imageError, setImageError] = useState(false);
  const formattedDate = new Date(song.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handlePlay = () => {
    if (onPlay) {
      onPlay(song.videoId);
    } else {
      window.open(`https://www.youtube.com/watch?v=${song.videoId}`, '_blank');
    }
  };

  // Create a fallback image URL using the video ID
  const fallbackImageUrl = `https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`;

  const handleImageError = () => {
    setImageError(true);
  };

  const handlePlayMusic = () => {
    navigate(`/play?id=${song.videoId}`);
  };

  return (
    <div
      onClick={handlePlayMusic}
      className="w-64 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
    >
      <div className="relative">
        <img
          src={imageError ? fallbackImageUrl : song.thumbnail}
          alt={song.title}
          className="w-full h-40 object-cover"
          onError={handleImageError}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300"
          // onClick={handlePlay}
        >
          <div className="w-12 h-12 rounded-full bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-opacity-90 transition-opacity duration-300">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-2 h-10">
          {song.title}
        </h3>
        <p className="text-xs text-gray-600 mb-1">{song.channelTitle}</p>
        <p className="text-xs text-gray-400">{formattedDate}</p>
      </div>
    </div>
  );
};

export default MusicCard;
