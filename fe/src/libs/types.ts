export type SongType = {
  videoId: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
};

export type ThemeColors = 'green' | 'ocean' | 'gray' | 'red' | 'purple';

export type Theme = {
  color: ThemeColors;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
