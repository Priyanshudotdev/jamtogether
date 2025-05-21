import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import MusicGroundLayout from './components/layouts/music-ground-layout';
import { ThemeProvider } from './context/theme-context';
import './index.css';
import MusicPlayer from './pages/music-player-screen';
import ThemeToggleScreen from './pages/theme-toggle';
import AnotherPlayer from './pages/another-player';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MusicGroundLayout>
                <App />
              </MusicGroundLayout>
            }
          />
          <Route path="/play" element={<MusicPlayer />} />
          <Route path="/play2" element={<AnotherPlayer />} />
          <Route path="/toggle" element={<ThemeToggleScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>,
);
