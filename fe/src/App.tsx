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
  );
}

export default App;
