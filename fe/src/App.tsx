import { useRef, useState } from 'react';
import './App.css';
import YouTube, { type YouTubePlayer, type YouTubeProps } from 'react-youtube';

function App() {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [data, setData] = useState<{
    title: string;
    thumbnai: string;
  }>({
    thumbnai: '',
    title: '',
  });

  const onReady: YouTubeProps['onReady'] = (e) => {
    playerRef.current = e.target;
  };

  const playVideo = () => {
    fetchYoutubeDetails();
    playerRef.current?.playVideo();
  };

  const pauseVideo = () => {
    playerRef.current?.pauseVideo();
  };

  const seekTo = (seconds: number) => {
    playerRef.current?.seekTo(seconds, true);
  };

  const fetchYoutubeDetails = async () => {
    const API_KEY = '';
    const videoId = 'dQw4w9WgXcQ';
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

    await fetch(url)
      .then(async (res) => await res.json())
      .then((data) => {
        const title = data.items[0].snippet.title;
        const thumbnai = data.items[0].snippet.thumbnails.standard.url;
        setData({
          thumbnai,
          title,
        });
      });
  };

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <main>
      <div>
        {data && (
          <div className="max-w-[20rem]">
            <img src={data.thumbnai} alt="No image" />
            <h1 className="text-">{data.title}</h1>
          </div>
        )}

        <YouTube videoId="dQw4w9WgXcQ" onReady={onReady} opts={opts} />
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
    </main>
  );
}

export default App;
