import type { SongType } from './types';

export const mockSong: SongType = {
  videoId: 'dQw4w9WgXcQ',
  title: 'Never Gonna Give You Up',
  thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg',
  channelTitle: 'Rick Astley',
  publishedAt: '2009-10-25T06:57:33Z',
};

export const mockSongs: SongType[] = [
  {
    videoId: 'y6120QOlsfU',
    title: 'Darude - Sandstorm',
    thumbnail: 'https://i.ytimg.com/vi/y6120QOlsfU/default.jpg',
    channelTitle: 'Darude',
    publishedAt: '2010-01-26T08:12:45Z',
  },
  {
    videoId: '9bZkp7q19f0',
    title: 'PSY - GANGNAM STYLE',
    thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/default.jpg',
    channelTitle: 'PSY',
    publishedAt: '2012-07-15T07:46:32Z',
  },
];
