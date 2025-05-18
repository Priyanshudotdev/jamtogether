import { useState, type ChangeEvent, type FormEvent } from 'react';
import useMusic from './hooks/useMusic';
import SongCard, { type SongData } from './components/SongCard';
import TimePass from './components/TimePass';

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
    <TimePass />
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
