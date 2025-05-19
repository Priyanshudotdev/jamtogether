import { useState, type FormEvent } from 'react';
import LibraryScreen from './components/music-library';
import TimePass from './components/time-pass';
import useMusic from './hooks/use-music';
import { mockSong } from './libs/mock-data';

function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const { data: songsData, isLoading, isError } = useMusic(query, !!query);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(userInput);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-blue-600 ">
      <TimePass song={mockSong} />
      <LibraryScreen />
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={userInput}
    //       onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //         setUserInput(e.target.value)
    //       }
    //     />
    //     <button type="submit">Search</button>
    //   </form>

    //   {isLoading && <p>Loading...</p>}
    //   {isError && <p>Error fetching songs</p>}
    //   {songsData && (
    //     <div>
    //       <h3>Song Data:</h3>

    //       {songsData.map((song: SongData) => {
    //         return <SongCard song={song} key={song.publishedAt} />;
    //       })}
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
