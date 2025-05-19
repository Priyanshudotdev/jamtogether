import axios from 'axios';

const fetchSongs = async (query: string) => {
  if (!query) throw new Error('Query parameter is required');
  const encodedQuery = encodeURIComponent(query);

  try {
    const response = await axios.get(
      `http://localhost:8080/music/search?q=${encodedQuery}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch songs');
  }
};

const fetchSongsById = async (songId: string) => {
  try {
    if (!songId) {
      return new Error('songId is requred');
    }

    const response = await axios.get(`http://localhost:8080/music/${songId}`);

    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    return new Error('Failed to fetch the music of id ' + songId);
  }
};

export { fetchSongs, fetchSongsById };
