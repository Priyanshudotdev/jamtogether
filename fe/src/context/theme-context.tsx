import { createContext, useContext, useEffect, useState } from 'react';
import type {
  Theme,
  ThemeProviderProps,
  ThemeProviderState,
} from '../libs/types';

const initialState: ThemeProviderState = {
  theme: { color: 'green' },
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme,
  storageKey = 'ui-theme',
  ...props
}: ThemeProviderProps) {
  const [storedTheme, setStoredTheme] = useState<Theme>(() => {
    if (localStorage.getItem(storageKey)) {
      return JSON.parse(localStorage.getItem(storageKey) as string);
    }
    return {
      color: 'gray',
    };
  });

  // Load from localStorage on mount
  useEffect(() => {
    if (storageKey) {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme) {
        setStoredTheme(JSON.parse(savedTheme));
      }
    }
  }, [storageKey]);

  // Save to localStorage on theme change
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(storedTheme));
    }
  }, [storedTheme, storageKey]);

  const value: ThemeProviderState = {
    theme: storedTheme,
    setTheme: (theme: Theme) => {
      setStoredTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      <div data-theme={storedTheme.color}>{children}</div>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
